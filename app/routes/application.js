import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [
            {
                name: 'Elliot Richardson',
                text: 'This is a comment',
                photo: 'http://via.placeholder.com/350x150'
            },
            {
                name: 'Johnny Richardson',
                text: 'This is a comment number 2',
                photo: 'http://via.placeholder.com/350x150/101010/ffffff'
            }
        ]
    }
});
