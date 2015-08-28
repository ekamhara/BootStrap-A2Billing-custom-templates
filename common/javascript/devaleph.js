/* 
	For install intructions please check <http://www.devaleph.com/blog>
	Created by Ulises on 18June2013 - Any questions, contact me ulises at devaleph dot com	
	Developer by www. DevAleph.com
	Feel free to minify files in order to improve perfomance. All work done with jquery framework + Twitter API.
	Be aware that these files change the layout of your default A2Billing instance, in case you have an old version 
	and you just want to upgrade the look and fill and do not modify the source PHP code.
	
	This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
$(document).ready(function() {
var ENTITY_CARD = 'A2B_entity_card.php';
var PP_ERROR = "PP_error.php";
var USER_INFO = "userinfo.php";
var SUPPORT = "A2B_support.php";
var INDEX = "index.php";
var ENTITY_PASSWORD = "A2B_entity_password.php";
var CALL_HISTORY = "call-history.php";


var pathname = window.location.pathname;
$('a.hide_help').css("visibility","hidden");
$('table').filter('[name!="donotapplystyle"]').attr("class","table table-condensed");
$('table').css("margin-bottom", '0px');
$('div.msg_info').attr("class", 'alert alert-info');
$('input.form_input_button').attr("class", 'btn btn-default');
$('select.form_input_select').css("width", "210px");
$('textarea.form_input_textarea').css("width", "195px");
$('textarea.form_input_text').css("width", "195px");
$('a.cssbutton_big').attr("class", 'btn btn-default');
	
if(pathname.indexOf(PP_ERROR) > -1)
    {
        $('.login-border-center').attr("class", 'alert alert-error');
        //$('a').attr("class", 'btn btn-info');
    }
if(pathname.indexOf(INDEX) > -1)
    {
        $('option').css("background-position", "right top");
        $('option').css("background-repeat", "no-repeat");
        $('option').css("margin-right", "2px");
        $('button#submit.btn.btn-large.btn-success').css("font-size", "18px");
    }

if(pathname.indexOf(SUPPORT) > -1)
    { 
       $('[name="priority"]').css("width", '210px');
       $('[name="component"]').css("width", '210px');
       $('[name="description"]').css("width", '210px');
       $('[href="A2B_support.php"]').parent().attr("class", "nav-header active");
       $('[name="mydisplaylimit"]').css("width", "70px");
       $('input.btn.btn-primary').eq(1).css("margin-top", "-8px");
    }
if(pathname.indexOf(USER_INFO) > -1)
    {
        $('[href="userinfo.php"]').parent().attr("class", "nav-header active");
        $('[value="BUY NOW"]').attr("class", 'btn btn-success btn-large btn-block');
        $('[href="A2B_entity_card.php?atmenu=password&form_action=ask-edit&stitle=Personal+Information"]').attr("class", 'btn btn-default');
    }
if(pathname.indexOf(ENTITY_PHONENUMBER) > -1)
    {
        $('a.cssbutton_big').attr("class", 'btn btn-primary');
        $('select.form_input_select').css("width", "70px");
        $('input.btn.btn-primary').eq(0).css("margin-top", "-8px");
        $('[href="A2B_entity_phonenumber.php?section=10"]').parent().attr("class", "active");
        $('[name="resetPassword"]').attr("class", 'btn btn-danger');
        $('[name="status"]').css("width", "100px");
        $('[name="id_phonebook"]').css("width", "210px");
    }
if(pathname.indexOf(ENTITY_PASSWORD) > -1)
    {
       $('[name="resetPassword"]').attr("class", 'btn btn-danger');
       $('[href="A2B_entity_password.php?atmenu=password&form_action=ask-edit&stitle=Password"]').parent().attr("class", "nav-header active");
       $('input.btn.btn-primary').attr("width", '100px');
    }
if(pathname.indexOf(CALL_HISTORY) > -1)
    {
        $('input.form_input_button').attr("class", 'btn btn-info');
        $('input.btn.btn-primary').css("width", '200px');
        $('input.btn.btn-primary').css("margin-top", '20px');
        $('select.form_input_select').css("margin-bottom", "0px");
        $('select.form_input_select').css("font-size", "12px");
        $('[name="fromstatsday_sday"]').css("width", "60px");
        $('[name="tostatsday_sday"]').css("width", "60px");
        $('[name="fromstatsmonth_sday"]').css("width", "130px");
        $('[name="tostatsmonth_sday"]').css("width", "130px");
        $('[name="choose_currency"]').css("width", "220px");
        $('[name="choose_calltype"]').css("width", "170px");
        $('table').css("margin-bottom", '0px');
        $('input').css("margin-right", '5px');
        $('input').css("margin-bottom", '0px');
        $('[name="terminatecauseid"]').css("margin", "2px 30px 10px 5px");
        $('[name="resulttype"]').css("margin", "2px 30px 10px 5px");
        $('div.msg_info').attr("class", 'alert alert-info');
        $('[href="call-history.php"]').parent().attr("class", "nav-header active");
        $('td.fontstyle_searchoptions').css("vertical-align", "middle");
   }
if(pathname.indexOf(ENTITY_CARD) > -1)
    {
        $('input.form_input_button').attr("class", 'btn btn-info');
        $('table.editform_table1').attr("class","table table-bordered table-condensed");
        $('table.table.table-bordered.table-condensed').attr("width", "420px")
        $('input.btn.btn-info').css("margin-top", "20px");
        $('select.form_input_select').css("margin-bottom", "0px");
        $('select.form_input_select').css("width", "210px");
        $('a.hide_help').css("visibility","hidden");
        $('[href="userinfo.php"]').parent().attr("class", "nav-header active");
    }
});