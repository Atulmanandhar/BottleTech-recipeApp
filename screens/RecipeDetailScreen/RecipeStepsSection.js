import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomText from '../../components/CustomText';
import Utils from '../../constants';

const RecipeStepsSection = ({steps}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: Utils.Spacing.hs}}>
      <CustomText label={'Steps To Follow'} fontSize={Utils.FontSizes.large} />
      {steps.map((step, index) => {
        return (
          <View style={styles.stepSection} key={`${step}${index}`}>
            <CustomText label={`${index}. ${step}`} />
          </View>
        );
      })}
    </View>
  );
};

export default RecipeStepsSection;

const styles = StyleSheet.create({
  stepSection: {
    flex: 1,
    marginVertical: Utils.Spacing.vs * 0.5,
  },
});
