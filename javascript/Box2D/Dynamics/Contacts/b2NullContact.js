var b2NullContact = function() {
b2Contact.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2NullContact.prototype, b2Contact.prototype)
b2NullContact.prototype._super = function(){ b2Contact.prototype.__constructor.apply(this, arguments) }
b2NullContact.prototype.__constructor = function () {}
b2NullContact.prototype.__varz = function(){
}
// static methods
// static attributes
// methods
// attributes