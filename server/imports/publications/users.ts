import { Meteor } from 'meteor/meteor';
 
import { Parties } from '../../../both/collections/parties.collection';
 
Meteor.publish('uninvited', function (partyId: string) {
  const party = Parties.findOne(partyId);
 
  if (!party) {
    throw new Meteor.Error('404', 'No such party!');
  }
 
  return Meteor.users.find({
    _id: {
      $ne: this.userId
    }
  });
});