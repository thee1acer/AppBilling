import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleChevronClick = item => {
    setSelectedItem(item);
    setModalVisible(true);
  };
  const renderItem = ({item}) => (
    <ListItem style={styles.postContainer}>
      <ListItem.Content style={styles.postContainerContent}>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron size={22} onPress={() => handleChevronClick(item)} />
    </ListItem>
  );

  return (
    <View style={styles.boxContainer}>
      <View style={styles.topHeader}>
        <Image
          style={styles.topHeaderCmpLogoImage}
          source={require('../../public/images/company_logo.png')}
        />
      </View>

      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Details</Text>
            {selectedItem && (
              <View>
                <Text style={styles.modalTextTitle}>{selectedItem.title}</Text>
                <Text style={styles.modalTextDescription}>
                  {selectedItem.description}
                </Text>
              </View>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles.modalCloseButton}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.modalCloseButtonText}>Close</Text>
        </TouchableOpacity>
      </Modal>

      <View style={styles.bottomHeader}>
        <View style={styles.bottomHeaderLeft}>
          <Icon
            style={styles.sidePanelIcon}
            name="bars"
            size={25}
            color="#546e78"
          />
        </View>

        <View style={styles.bottomHeaderCenter}>
          <Icon
            style={styles.homeIcon}
            name="home"
            size={28}
            color="#546e78"
            onPress={() => navigation.navigate('Home')}
          />
        </View>

        <View style={styles.bottomHeaderRight}>
          <Icon
            style={styles.accountDetailsIcon}
            name="user-edit"
            size={25}
            color="#546e78"
          />
        </View>
      </View>
    </View>
  );
};

const data = [
  {
    id: '1',
    title: 'Google Meeting',
    description:
      '12 June 2024 - Meeting about the safety of kids in the city of Johannesburg and Gang Violence',
  },
  {
    id: '2',
    title: 'Team Sync',
    description:
      '05 January 2024 - Sync meeting to discuss project milestones and upcoming deadlines',
  },
  {
    id: '3',
    title: 'Client Presentation',
    description:
      '15 February 2024 - Presentation of the new app features to the client',
  },
  {
    id: '4',
    title: 'Budget Review',
    description:
      '22 March 2024 - Review of the quarterly budget and financial plans',
  },
  {
    id: '5',
    title: 'Product Launch',
    description: '10 April 2024 - Launch event for the new product line',
  },
  {
    id: '6',
    title: 'Marketing Strategy',
    description:
      '18 May 2024 - Meeting to discuss the new marketing strategies for the next quarter',
  },
  {
    id: '7',
    title: 'HR Training',
    description:
      '30 June 2024 - Training session for the HR department on the new system',
  },
  {
    id: '8',
    title: 'Sales Update',
    description: '07 July 2024 - Monthly sales update meeting',
  },
  {
    id: '9',
    title: 'Project Kickoff',
    description: '14 August 2024 - Kickoff meeting for the new project',
  },
  {
    id: '10',
    title: 'Workshop',
    description: '21 September 2024 - Workshop on agile methodologies',
  },
  {
    id: '11',
    title: 'Executive Meeting',
    description:
      '28 October 2024 - Monthly executive meeting to discuss company performance',
  },
  {
    id: '12',
    title: 'Development Sprint',
    description: '04 November 2024 - Start of the new development sprint',
  },
  {
    id: '13',
    title: 'User Testing',
    description:
      '12 December 2024 - User testing session for the new application',
  },
];

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    backgroundColor: '#dae6eb',
    padding: 0,
    borderWidth: 1,
  },

  topHeaderCmpLogoImage: {
    width: '100%',
    height: '100%',
  },

  postContainer: {
    marginBottom: 5,
  },

  postContainerContent: {
    borderRadius: 5,
    marginBottom: 5,
    padding: 8,
    margin: 0,
    backgroundColor: '#e4f2f7',
  },

  postContainerChevron: {
    fontSize: 40,
  },

  flatList: {
    padding: 10,
  },

  topHeader: {
    width: '100%',
    top: 0,
    height: 50,
    position: 'static',
  },

  topHeaderText: {
    color: 'black',
    borderWidth: 1,
    height: '100%',
    fontSize: 22,
    width: '100%',
  },

  topHeaderIcon: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'red',
    height: '100%',
    paddingTop: 20,
  },

  bottomHeader: {
    width: '100%',
    bottom: 0,
    height: 45,
    position: 'static',
    marginTop: 8,
    flexDirection: 'row',
    padding: 5,
  },

  bottomHeaderLeft: {
    height: '100%',
    width: '33%',
    paddingLeft: 15,
  },

  bottomHeaderCenter: {
    height: '100%',
    position: 'static',
    width: '33%',
    marginLeft: 2,
  },

  bottomHeaderRight: {
    height: '100%',
    width: '33%',
    marginLeft: 2,
    paddingRight: 15,
  },

  sidePanelIcon: {
    alignSelf: 'flex-start',
  },

  homeIcon: {
    alignSelf: 'center',
  },

  accountDetailsIcon: {
    alignSelf: 'flex-end',
  },

  modalContainer: {
    backgroundColor: '#afdcde',
    width: '90%',
    height: '80%',
    marginTop: '20%',
    marginLeft: '5%',
    opacity: 0.9,
    borderRadius: 20,
    padding: 10,
  },

  modalContent: {},

  modalTitle: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
  },

  modalTextTitle: {
    color: 'black',
    fontSize: 21,
  },

  modalTextDescription: {
    color: 'black',
    fontSize: 15,
  },

  modalCloseButton: {
    color: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: -55,
    width: '60%',
    alignSelf: 'center',
    position: 'static',
    height: 40,
  },

  modalCloseButtonText: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 22,
  },
});

export default HomeScreen;
