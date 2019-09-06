ExtensionScriptApis.onReady(function(){
    var datePicker = Ext.create('Ext.field.DatePicker',{
        label : 'Date of birth',
        value : new Date()
    });

    Ext.create('Ext.container.Container',{
        renderTo : Ext.getBody(),
        width : 100,
        height : 100,
        items : [datePicker]

    });

});