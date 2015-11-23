import Ember from 'ember';

export default Ember.Controller.extend({
	isValid: Ember.computed(
		'model.decription',
		{
			get() {
				return !Ember.isEmpty(this.get('model.description'));
			}
		}
	),
	actions: {
		save() {
			if (this.get('isValid')) {
				this.get('model').save().then((friend) => {
					this.transitionToRoute('friends.show', friend);
				});
			} else {
				this.set('errorMessage', 'You have to fill in the description');
			}
			return false;
		},
		cancel() {
			return true;
		}
	}
});
