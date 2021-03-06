import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Button, ThemeContext, ThemeProps, Text } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from 'react-native-elements';
import { IThemeObject } from '../../../theme/theme.model';
import Modal from 'react-native-modal';
import ReviewFormContent from './ReviewForm.content';

interface ReviewFormModalProps {
  movieId: string;
}

const ReviewFormModal = ({ movieId }: ReviewFormModalProps) => {
  const { theme } = useContext<ThemeProps<any>>(ThemeContext);

  const [showForm, setShowForm] = useState(false);

  const toggleFormModal = () => {
    setShowForm(!showForm);
  };

  return (
    <View>
      {/* Button to open the modal */}
      <Button
        onPress={toggleFormModal}
        icon={<Icon name="add-circle" />}
        title="Add review"
        containerStyle={{ borderRadius: 8 }}
        buttonStyle={{ padding: 4 }}
      />

      <Modal
        style={{ margin: 0 }}
        isVisible={showForm}
        /* Close modal if press on backdrop or swipedown */
        onBackdropPress={() => setShowForm(false)}
        onSwipeComplete={() => setShowForm(false)}
        swipeDirection="down"
      >
        <View style={styles(theme).modalContainer}>
          <View style={styles(theme).modalHeader}>
            <Text h4>NEW REVIEW</Text>

            {/* Close modal button */}
            <Button
              title="Close"
              type="outline"
              buttonStyle={styles(theme).closeButtonStyle}
              icon={
                <Icon name="close" size={20} color={theme.colors.primary} />
              }
              onPress={() => setShowForm(false)}
            />
          </View>
          {/* Reviewform contains the input fields and submitbutton */}
          <ReviewFormContent
            movieId={movieId}
            toggleFormModal={toggleFormModal}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = (theme: IThemeObject) =>
  EStyleSheet.create({
    container: {
      backgroundColor: theme.colors.grey1,
    },
    modalContainer: {
      backgroundColor: theme.colors.grey3,
      padding: 15,
      paddingBottom: 20,
      position: 'absolute',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      bottom: 0,
      left: 0,
      right: 0,
      top: 100,
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    closeButtonStyle: {
      padding: 7,
      borderRadius: 4,
    },
  });

export default ReviewFormModal;
