Set App = CreateObject("QuickTest.Application")
'Launch the application
App.Launch
'Setting the visibility to show the application on screen
App.Visible = True
'Opens the test in read-only mode
App.open "C:\Users\vanit\OneDrive\Documents\Unified Functional Testing\GUITest1", True
'Set test object
Set test = App.Test
'run the test
test.Run
'wait till the script is run
wscript.sleep 10000
'close and quit application
test.close
App.quit
'Release objects
Set test = Nothing
Set App = Nothing