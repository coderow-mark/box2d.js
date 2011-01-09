var b2Joint = function() {
this.__varz();
this.__constructor.apply(this, arguments);
}
b2Joint.prototype.__constructor = function (def) {
		b2Settings.b2Assert(def.bodyA != def.bodyB);
		this.m_type = def.type;
		this.m_prev = null;
		this.m_next = null;
		this.m_bodyA = def.bodyA;
		this.m_bodyB = def.bodyB;
		this.m_collideConnected = def.collideConnected;
		this.m_islandFlag = false;
		this.m_userData = def.userData;
	}
b2Joint.prototype.__varz = function(){
this.m_edgeA =  new b2JointEdge();
this.m_edgeB =  new b2JointEdge();
this.m_localCenterA =  new b2Vec2();
this.m_localCenterB =  new b2Vec2();
}
// static methods
// static attributes
// methods
b2Joint.prototype.GetType = function () {
		return this.m_type;
	}
b2Joint.prototype.GetAnchorA = function () {return null}
b2Joint.prototype.GetAnchorB = function () {return null}
b2Joint.prototype.GetReactionForce = function (inv_dt) {return null}
b2Joint.prototype.GetReactionTorque = function (inv_dt) {return 0.0}
b2Joint.prototype.GetBodyA = function () {
		return this.m_bodyA;
	}
b2Joint.prototype.GetBodyB = function () {
		return this.m_bodyB;
	}
b2Joint.prototype.GetNext = function () {
		return this.m_next;
	}
b2Joint.prototype.GetUserData = function () {
		return this.m_userData;
	}
b2Joint.prototype.SetUserData = function (data) {
		this.m_userData = data;
	}
b2Joint.prototype.IsActive = function () {
		return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
	}
// attributes
b2Joint.prototype.m_type =  0;
b2Joint.prototype.m_prev =  null;
b2Joint.prototype.m_next =  null;
b2Joint.prototype.m_edgeA =  new b2JointEdge();
b2Joint.prototype.m_edgeB =  new b2JointEdge();
b2Joint.prototype.m_bodyA =  null;
b2Joint.prototype.m_bodyB =  null;
b2Joint.prototype.m_islandFlag =  null;
b2Joint.prototype.m_collideConnected =  null;
b2Joint.prototype.m_userData =  null;
b2Joint.prototype.m_localCenterA =  new b2Vec2();
b2Joint.prototype.m_localCenterB =  new b2Vec2();
b2Joint.prototype.m_invMassA =  null;
b2Joint.prototype.m_invMassB =  null;
b2Joint.prototype.m_invIA =  null;
b2Joint.prototype.m_invIB =  null;
b2Joint.prototype.e_unknownJoint =  0;
b2Joint.prototype.e_revoluteJoint =  1;
b2Joint.prototype.e_prismaticJoint =  2;
b2Joint.prototype.e_distanceJoint =  3;
b2Joint.prototype.e_pulleyJoint =  4;
b2Joint.prototype.e_mouseJoint =  5;
b2Joint.prototype.e_gearJoint =  6;
b2Joint.prototype.e_lineJoint =  7;
b2Joint.prototype.e_weldJoint =  8;
b2Joint.prototype.e_frictionJoint =  9;
b2Joint.prototype.e_inactiveLimit =  0;
b2Joint.prototype.e_atLowerLimit =  1;
b2Joint.prototype.e_atUpperLimit =  2;
b2Joint.prototype.e_equalLimits =  3;