import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../../components/CustomText';
import Utils from '../../constants';

const RecipeIngredientSection = ({ingredients}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: Utils.Spacing.hs}}>
      <CustomText
        label={'Ingredients Required'}
        fontSize={Utils.FontSizes.large}
      />
      {ingredients.map((ingredient, index) => {
        return (
          <View
            style={styles.categoriesSection}
            key={`${ingredient.name}${index}`}>
            <CustomText label={ingredient.name} />
            <CustomText label={`${ingredient.quantity} ${ingredient.unit}`} />
          </View>
        );
      })}
    </View>
  );
};

export default RecipeIngredientSection;

const styles = StyleSheet.create({
  categoriesSection: {
    flex: 1,
    marginVertical: Utils.Spacing.vs * 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
