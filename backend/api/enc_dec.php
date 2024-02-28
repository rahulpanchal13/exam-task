<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Practice Task</title>

    <style type="text/css">
        ::selection {
            background-color: #E13300;
            color: white;
        }

        ::-moz-selection {
            background-color: #E13300;
            color: white;
        }

        body {
            background-color: #fff;
            margin: 40px;
            font: 13px/20px normal Helvetica, Arial, sans-serif;
            color: #4F5155;
            word-break: break-word;
        }

        a {
            color: #003399;
            background-color: transparent;
            font-weight: normal;
        }

        h1 {
            color: #444;
            background-color: transparent;
            border-bottom: 1px solid #D0D0D0;
            font-size: 19px;
            font-weight: normal;
            margin: 0 0 14px 0;
            padding: 14px 15px 10px 15px;
        }

        code {
            font-family: Consolas, Monaco, Courier New, Courier, monospace;
            font-size: 12px;
            background-color: #f9f9f9;
            border: 1px solid #D0D0D0;
            color: #002166;
            display: block;
            margin: 14px 0 14px 0;
            padding: 12px 10px 12px 10px;
        }

        textarea {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;

            width: 100%;
        }

        #body {
            margin: 0 15px 0 15px;
        }

        p.footer {
            text-align: right;
            font-size: 11px;
            border-top: 1px solid #D0D0D0;
            line-height: 32px;
            padding: 0 10px 0 10px;
            margin: 20px 0 0 0;
        }

        #container {
            margin: 10px;
            border: 1px solid #D0D0D0;
            box-shadow: 0 0 8px #D0D0D0;
        }
    </style>
</head>

<body>

    <div id="container">
        <h1>Encryption & Decryption</h1>

        <div id="body">
            <form class='form-horizontal' role='form' id='poster_add' name='poster_add' enctype='multipart/form-data' action="enc_dec.php" method="POST">
                <label><b>Text or Encryption </b></label><br>
                <textarea name="data" id="data" required="" cols="90" rows="20"></textarea>
                <br>
                <br>
                <input type="submit" name="type" value="encrypt">
                <input type="submit" name="type" value="decrypt">
                <input type="reset" name="reset" value="Clear">
                <br><br>
            </form>
        </div>
    </div>

</body>

<script type="text/javascript">
    function CopyToClipboard(containerid) {
        var container = document.getElementById(containerid);
        if (!container) return;

        container.style.display = "block";
        var range = document.createRange();
        range.selectNode(container);
        window.getSelection().addRange(range);

        navigator.clipboard.writeText(container.innerText).then(function() {
            window.getSelection().removeAllRanges();
            var successMessage = document.createElement("div");
            successMessage.innerHTML = "Copied Successfully!";
            successMessage.style.backgroundColor = "green";
            successMessage.style.color = "white";
            successMessage.style.padding = "10px";
            successMessage.style.position = "fixed";
            successMessage.style.top = "50%";
            successMessage.style.left = "50%";
            successMessage.style.transform = "translate(-50%, -50%)";
            document.body.appendChild(successMessage);
            setTimeout(function() {
                successMessage.remove();
            }, 2500);
        }, function(err) {
            console.error('Failed to copy text: ', err);
        });
    }

    function clearContents(containerid) {
        document.getElementById(containerid).value = "";
    }
</script>

</html>
<script type="text/javascript" src="config/constant.js"></script>
<script>


</script>
<?php
$encryptionMethod = 'AES-256-CBC';
$secret = hash('sha256', "ebWUP85ilXwgjLvpuxmxXSFooHDIOj1E");  //must be 32 char length
$iv = "ebWUP85ilXwgjLvp";

if (isset($_REQUEST['type']) && isset($_REQUEST['data']) && $_REQUEST['data'] != '') {
    if ($_REQUEST['type'] == 'encrypt') {
        $plaintext = trim($_REQUEST['data']);
        $decrypt_value = $_REQUEST['data'];
        $encrypt_value = openssl_encrypt($plaintext, $encryptionMethod, $secret, 0, $iv);

        echo "<div id='container'><div id='body'><h2 onclick=CopyToClipboard('p1') style='cursor: pointer;'>COPY HASH</h2>
        <p id='p1'>" . $encrypt_value . "</p>
        <h3>For Dev</h3><textarea rows='5' >" . $encrypt_value . "</textarea>
        <h2 onclick=CopyToClipboard('p2') style='cursor: pointer;'>COPY ORIGINAL</h2>
        <p id='p2'>" . $decrypt_value . "</p><h2 style='cursor: pointer;'>JSON</h2></div></div>";

        die();
    } else {
        $enc = $_REQUEST['data'];
        $decrypt_value = openssl_decrypt($enc, $encryptionMethod, $secret, 0, $iv);
        $encrypt_value = $_REQUEST['data'];


        echo "<div id='container'><div id='body'><h2 onclick=CopyToClipboard('p1') style='cursor: pointer;'>COPY HASH</h2>
        <p id='p1'>" . $encrypt_value . "</p>
        <h2 onclick=CopyToClipboard('p2') style='cursor: pointer;'>COPY ORIGINAL</h2>
        <p id='p2'>" . $decrypt_value . "</p><br><h3>For Dev</h3><textarea rows='5'>" . $decrypt_value . "</textarea><h2 style='cursor: pointer;'>JSON</h2>";
        echo "<pre>";
        print_r(json_decode($decrypt_value));
        "</div></div>";

        //echo  json_last_error_msg();
    }
}

?>