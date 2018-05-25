
function chbox_menu(){
  var link_html = '<a href="#" onclick="return rcmail.command(\'plugin.chbox.selectmenu\')">'+rcmail.env.chboxicon;
  $('#rcmchbox').html(link_html);
}

$(document).ready(function(){
  chbox_menu();
    var li = '<label class="disabled"><input type="checkbox" name="list_col[]" value="chbox" id="cols_chbox" checked="checked" disabled="disabled" type="checkbox"/><span>'+rcmail.get_label('chbox.chbox')+'</span></label>';
  $("#listmenu ul.toolbarmenu li:first()").after('<li>'+li+'</li>');
});
