import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import CustomText from '../../components/CustomText';
import ScreenWrapper from '../../components/ScreenWrapper';
import Utils from '../../constants';
import {useTheme} from '../../hooks/useTheme';
import BackIcon from '../../assets/icons/BackIcon';
import DocumentPicker from 'react-native-document-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import CustomPicker from '../../components/CustomPicker';
import Spinner from 'react-native-loading-spinner-overlay';
import {useDispatch} from 'react-redux';
import {
  createRecipeHandler,
  getRecipeHandler,
} from '../../redux/actions/recipe';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const INGREDIENT_UNITS = ['kg', 'gm', 'ltr', 'pcs', 'tbsp'];

const AddRecipeScreen = ({navigation}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [imageResponse, setImageResponse] = useState('');
  const [imageErrorMsg, setImageErrorMsg] = useState(null);
  const [foodName, setFoodName] = useState('');
  const [ingredients, setIngredients] = useState([
    {name: '', quantity: '', unit: ''},
  ]);
  const [steps, setSteps] = useState(['']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageSelect = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      setImageResponse(res);
    } catch (err) {
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        console.log('canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        setImageResponse(null);

        throw err;
      }
    }
  };

  const addIngredientHandler = () => {
    const _ingredients = [...ingredients];
    _ingredients.push({name: '', quantity: '', unit: ''});
    setIngredients(_ingredients);
  };

  const deleteIngredientHandler = key => {
    const _ingredients = ingredients.filter((input, index) => index != key);
    setIngredients(_ingredients);
  };

  const ingredientsHandler = (text, key, name) => {
    const _ingredients = [...ingredients];
    _ingredients[key][name] = text;
    setIngredients(_ingredients);
  };
  const addStepsHandler = () => {
    const _steps = [...steps];
    _steps.push('');
    setSteps(_steps);
  };

  const deleteStepsHandler = key => {
    const _steps = steps.filter((input, index) => index != key);
    setSteps(_steps);
  };

  const stepsHandler = (text, key) => {
    const _steps = [...steps];
    _steps[key] = text;
    setSteps(_steps);
  };

  const handleCallback = type => {
    setIsSubmitting(false);
    if (type === 'success') {
      navigation.pop();
      dispatch(getRecipeHandler());
    }
  };

  const submitHandler = async () => {
    let errorCount = 0;
    // some simple validations
    //regex to test for empty string including whitespaces
    if (!/\S/.test(foodName)) {
      errorCount += 1;
      alert('Enter Ingredient Name');
      return;
    }
    if (!!!imageResponse) {
      errorCount += 1;
      alert('Please select an image');
      return;
    }
    ingredients.forEach(ingredient => {
      if (
        !/\S/.test(ingredient.name) ||
        !/\S/.test(ingredient.quantity) ||
        !/\S/.test(ingredient.unit)
      ) {
        errorCount += 1;
        alert(
          'Please fill out all the ingredient forms or or remove if unnecessary fields are added ',
        );
        return;
      }
    });
    steps.forEach(step => {
      if (!/\S/.test(step)) {
        errorCount += 1;
        alert(
          'Please fill out all the steps field or remove if unnecessary fields are added',
        );
        return;
      }
    });
    // formData for submission
    const fileToUpload = imageResponse;
    const data = new FormData();
    data.append('name', foodName);
    data.append('imageUrl', fileToUpload);
    data.append('ingredients', JSON.stringify(ingredients));
    steps.forEach(step => {
      data.append('steps', step);
    });

    if (!errorCount > 0) {
      setIsSubmitting(true);
      dispatch(createRecipeHandler(data, handleCallback));
    }
  };

  return (
    <ScreenWrapper>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={styles.absouluteBackButton}
        activeOpacity={0.6}>
        <View style={styles.backButton(theme)}>
          <BackIcon />
        </View>
      </TouchableOpacity>
      <Spinner visible={isSubmitting} overlayColor="rgba(0,0,0,0.6)" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.screen}
        contentContainerStyle={styles.ScrollViewContent}
        showsVerticalScrollIndicator={false}>
        {/* <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.screen}
          contentContainerStyle={styles.ScrollViewContent}
          showsVerticalScrollIndicator={false}> */}
        <CustomText
          label={`Let's Create a recipe`}
          fontSize={Utils.FontSizes.large}
          fontFamily={Utils.FontFamily.opensans_B}
        />
        {/* Image Section */}
        <TouchableOpacity style={styles.imageView} onPress={handleImageSelect}>
          {imageResponse === '' ? (
            <>
              <View style={styles.noImageContainer}>
                <CustomText
                  label="Pick an Image"
                  fontFamily={Utils.FontFamily.opensans_B}
                  fontSize={Utils.FontSizes.small}
                />
              </View>
              {imageErrorMsg ? (
                <CustomText
                  label={imageErrorMsg}
                  fontFamily={Utils.FontFamily.opensans_B}
                  fontSize={Utils.FontSizes.small}
                />
              ) : null}
            </>
          ) : (
            <>
              <Image
                style={styles.image}
                source={{uri: imageResponse.uri}}
                resizeMode="cover"
              />
            </>
          )}
        </TouchableOpacity>
        {/* Form Section */}
        <CustomTextInput
          placeholder={'Enter Food Name'}
          value={foodName}
          onChangeText={setFoodName}
        />
        <CustomText
          label={`Enter the Ingredients`}
          fontSize={Utils.FontSizes.medium}
          fontFamily={Utils.FontFamily.opensans_B}
        />

        {/* repeatable ingredients container */}

        {ingredients.map((ingredient, key) => (
          <View key={`ingredient${key}`}>
            <View style={styles.titleHeader}>
              <CustomText label={`Ingredient ${key}:`} />
              {key != 0 && (
                <TouchableOpacity
                  onPress={deleteIngredientHandler.bind(this, key)}>
                  <CustomText label={`Delete`} style={styles.deleteText} />
                </TouchableOpacity>
              )}
            </View>
            <CustomTextInput
              placeholder={'Enter Ingredient Name'}
              value={ingredient.name}
              onChangeText={text => ingredientsHandler(text, key, 'name')}
            />
            <View style={styles.inlineIngredientsInput}>
              <CustomTextInput
                placeholder={'Enter Quantity'}
                keyboardType="numeric"
                value={ingredient.quantity}
                onChangeText={text => ingredientsHandler(text, key, 'quantity')}
                containerStyle={{width: wp('50%')}}
              />
              <CustomTextInput
                placeholder={'unit'}
                keyboardType="default"
                value={ingredient.unit}
                onChangeText={text => ingredientsHandler(text, key, 'unit')}
                containerStyle={{width: wp('30%')}}
              />
              {/* <CustomPicker
                data={INGREDIENT_UNITS}
                value={ingredient.unit}
                setPickerDataHandler={itemValue => {
                  ingredientsHandler(itemValue, key, 'unit');
                }}
              /> */}
            </View>
          </View>
        ))}
        <CustomButton
          onPress={addIngredientHandler}
          label="Add another ingredient"
          buttonStyle={styles.addButton}
          textStyle={styles.addBtnText}
        />
        <View style={{height: Utils.Spacing.vs}} />
        <CustomText
          label={`Enter the Steps`}
          fontSize={Utils.FontSizes.medium}
          fontFamily={Utils.FontFamily.opensans_B}
        />
        {steps.map((step, key) => (
          <View key={`step${key}`}>
            <View style={styles.titleHeader}>
              <CustomText label={`Step ${key}:`} />
              {key != 0 && (
                <TouchableOpacity onPress={deleteStepsHandler.bind(this, key)}>
                  <CustomText label={`Delete`} style={styles.deleteText} />
                </TouchableOpacity>
              )}
            </View>
            <CustomTextInput
              placeholder={'Enter Step Name'}
              value={step}
              onChangeText={text => stepsHandler(text, key)}
            />
          </View>
        ))}
        <CustomButton
          onPress={addStepsHandler}
          label="Add another step"
          buttonStyle={styles.addButton}
          textStyle={styles.addBtnText}
        />

        <CustomButton
          label={'Submit your recipe'}
          buttonStyle={styles.submitButton}
          onPress={submitHandler}
        />
        <View style={{marginBottom: 50}} />
        {/* </ScrollView> */}
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default AddRecipeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  ScrollViewContent: {
    marginTop: Utils.Spacing.vs * 3,
    paddingVertical: Utils.Spacing.vs,
    paddingHorizontal: Utils.Spacing.hs,
  },
  absouluteBackButton: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 10 : 50,
    left: 10,
    zIndex: 1000,
  },
  backButton: theme => ({
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.backgroundColor1,
    borderRadius: 10,
  }),
  imageView: {
    alignItems: 'center',
    marginTop: hp('7%'),
    marginVertical: Utils.Spacing.vs * 1.5,
    height: 165,
    width: 165,
    borderRadius: 165 / 3,
    backgroundColor: '#707070',
    alignSelf: 'center',
  },
  image: {height: 165, width: 165, borderRadius: 165 / 3},
  noImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 165,
    width: 165,
  },

  // testing Dynmaic
  inputsContainer: {
    flex: 1,
    // backgroundColor:"red"
  },
  inlineIngredientsInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Utils.Spacing.vs * 0.5,
  },

  addButton: {
    alignSelf: 'center',
    height: hp('5%'),
    borderRadius: 5,
  },
  addBtnText: {
    fontSize: Utils.FontSizes.small,
  },
  deleteText: {color: '#db0029'},
  submitButton: {alignSelf: 'center', marginTop: Utils.Spacing.vs},
});
