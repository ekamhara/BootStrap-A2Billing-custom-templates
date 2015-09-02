<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<HEAD>
	<link rel="shortcut icon" href="templates/{$SKIN_NAME}/images/a2billing-icon-32x32.ico">
	<title>..:: {$CCMAINTITLE} ::..</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <link href="templates/{$SKIN_NAME}/css/main.css" rel="stylesheet" type="text/css">
    <link href="templates/{$SKIN_NAME}/css/menu.css" rel="stylesheet" type="text/css">
    
    {if LANGUAGE == "farsi" }
        <link href="templates/{$SKIN_NAME}/css/right2left.css" rel="stylesheet" type="text/css">
    {/if}
    
	<!--[if lt IE 7]>
		<link rel="stylesheet" type="text/css" href="templates/{$SKIN_NAME}/css/style-ie.css" />
	<![endif]-->
	<link href="templates/{$SKIN_NAME}/css/style-def.css" rel="stylesheet" type="text/css">
	<link href="templates/{$SKIN_NAME}/css/invoice.css" rel="stylesheet" type="text/css">
	<link href="templates/{$SKIN_NAME}/css/receipt.css" rel="stylesheet" type="text/css">
	{if ($popupwindow != 0)}
		<link href="templates/{$SKIN_NAME}/css/popup.css" rel="stylesheet" type="text/css">
 	{/if}
	<script type="text/javascript">	
		var IMAGE_PATH = "templates/{$SKIN_NAME}/images/";
	</script>
	<script type="text/javascript" src="./javascript/jquery/jquery-1.2.6.min.js"></script>
	<link href="templates/{$SKIN_NAME}/css/bootstrap.css" rel="stylesheet">
	<link href="templates/{$SKIN_NAME}/css/customization.css" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap-responsive.css" rel="stylesheet">
	<script type="text/javascript" src="./javascript/jquery/jquery.debug.js"></script>
	<script type="text/javascript" src="./javascript/jquery/ilogger.js"></script>
	<script type="text/javascript" src="./javascript/jquery/handler_jquery.js"></script>
	<script language="javascript" type="text/javascript" src="./javascript/misc.js"></script>
	<script language="javascript" type="text/javascript" src="./javascript/devaleph.js"></script>
	<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
</HEAD>

<BODY leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
	<div class="navbar navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">
				<a class="brand" href="index.php"><img src="templates/{$SKIN_NAME}/images/logo_kurira.jpg" alt="Logo"/></a>
				<div id="menuitems" class="top-menu">
					<a href="userinfo.php" class="topmenuitem">{php} echo gettext("ACCOUNT INFO");{/php}</a>
					{if $ACXVOICEMAIL>0 }
		                <a href="A2B_entity_voicemail.php" class="topmenuitem">{php} echo gettext("VOICEMAIL");{/php}</a>
		            {/if}
		            {if $ACXCALL_HISTORY >0 }
		              <a href="call-history.php">{php} echo gettext("CALL HISTORY");{/php}</a>
		            {/if}
		            {if $ACXPASSWORD>0 }
	                <a href="A2B_entity_password.php?atmenu=password&form_action=ask-edit&stitle=Password">{php} echo gettext("PASSWORD");{/php}</a>
	                {/if}
	                {if $ACXSUPPORT >0 }
	                <a href="A2B_support.php">{php} echo gettext("SUPPORT");{/php}</a>
	                {/if}
	                {if $ACXNOTIFICATION >0 }
	                <a href="A2B_notification.php?form_action=ask-edit">{php} echo gettext("NOTIFICATION");{/php}</a>
	                {/if}

				</div>
			</div>
		</div>
	</div>
<div id="page-wrap">
	<div id="inside">
