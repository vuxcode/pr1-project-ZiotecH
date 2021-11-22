while($true){
$msg = (cat .\autopush)
if("" -eq $msg){$msg = "automatic 30 minute push"}
git add *
git commit * -m $msg
git push
"" | out-file .\autopush -encoding ascii
Start-Sleep -Seconds 1800
}