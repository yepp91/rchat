$(function(){
	rchat.__init();
});


var rchat = {
	msg_stack : {},

	LoadInitData : function() {
		$.post('http://chat.radio-t.com/api/last/50',function(res) {
			res = $.parseJSON(res);
			$.each(function(index) {
				console.log(this);
			});
		});
	},

	gMsgTemplate : function(msg) {

	},

	__init : function() {
		rchat.LoadInitData();
	}
}