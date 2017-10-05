import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        update: function(){
            this.get('model').pushObject({
                name: 'Joe Dummy',
                text: this.get('text'),
                photo: 'http://via.placeholder.com/350x150/dedede/000000'
            })
        }
    }
});
