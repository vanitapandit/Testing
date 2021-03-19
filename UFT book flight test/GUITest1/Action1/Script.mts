'Load sheet Global and get the row count
n=datatable.GetSheet("Global").GetRowCount @@ hightlight id_;_1902622424_;_script infofile_;_ZIP::ssf64.xml_;_


'Implement for loop to run the script n times
For i = 1 To n

	DataTable.SetCurrentRow(i)

'Creating the filename dynamically to save the before and after images in each iteration without overiding filename
Dim dateTimeNow
dateTimeNow = DotNetFactory.CreateInstance( "System.DateTime" ).Now.ToString( "ddMMyyHHmmss" )
fileNameStr = "C:\Users\vanit\OneDrive\Documents\Unified Functional Testing\GUITest1\login\before" & "\" & dateTimeNow & ".png" 
fileNameStr1 = "C:\Users\vanit\OneDrive\Documents\Unified Functional Testing\GUITest1\login\after" & "\" & dateTimeNow & ".png" 
fileNameStr2 = "C:\Users\vanit\OneDrive\Documents\Unified Functional Testing\GUITest1\form\before" & "\" & dateTimeNow & ".png" 
fileNameStr3 = "C:\Users\vanit\OneDrive\Documents\Unified Functional Testing\GUITest1\form\after" & "\" & dateTimeNow & ".png" 

'Loads the application
SystemUtil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

'Captures the login screen before filling in the details
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap fileNameStr @@ hightlight id_;_2119661896_;_script infofile_;_ZIP::ssf23.xml_;_

'Textfields are updated with the username and password
UIAWindow("Micro Focus MyFlight Sample").UIAEdit("agentName").SetValue DataTable("username", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure DataTable("passwordPick", dtGlobalSheet)

'Captures the login screen after filling in the details
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap fileNameStr1
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2117245336_;_script infofile_;_ZIP::ssf24.xml_;_

'Captures the login screen before filling in the details
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap fileNameStr2

'Fills in appropriate data in the form
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select datatable("fromCity") @@ hightlight id_;_1994359472_;_script infofile_;_ZIP::ssf27.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet) @@ hightlight id_;_2117243512_;_script infofile_;_ZIP::ssf31.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate DataTable("DatePick", dtGlobalSheet) @@ hightlight id_;_2119672216_;_script infofile_;_ZIP::ssf33.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select DataTable("FlightClass", dtGlobalSheet) @@ hightlight id_;_2119672120_;_script infofile_;_ZIP::ssf35.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select DataTable("NoofTickets", dtGlobalSheet)


'Captures the login screen after filling in the details
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap fileNameStr3


'Image checkpoint added
WpfWindow("Micro Focus MyFlight Sample").WpfImage("image2Checkpoint").Check CheckPoint("image2Checkpoint")
WpfWindow("Micro Focus MyFlight Sample").WpfObject("image1Checkpoint").Check CheckPoint("image1Checkpoint") @@ hightlight id_;_4915700_;_script infofile_;_ZIP::ssf102.xml_;_

'Text checkpoint added to confirm the username from the previous screen
WpfWindow("Micro Focus MyFlight Sample").WpfObject("usernameCheckpoint").Check CheckPoint("usernameCheckpoint")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2119633936_;_script infofile_;_ZIP::ssf39.xml_;_

'Select the appropriate flight row from the flight grid
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell DataTable("FlightGrid",dtGlobalSheet),0 @@ hightlight id_;_1994359712_;_script infofile_;_ZIP::ssf40.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2013983136_;_script infofile_;_ZIP::ssf41.xml_;_

'Enter the passenger name
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set DataTable("passengerName", dtGlobalSheet) @@ hightlight id_;_2013983568_;_script infofile_;_ZIP::ssf42.xml_;_

'Text checkpoints are added to confirm the class, no. of tickets, from city, to city
WpfWindow("Micro Focus MyFlight Sample").WpfObject("FlightClassCheckpoint").Check CheckPoint("FlightClassCheckpoint") @@ hightlight id_;_1911745048_;_script infofile_;_ZIP::ssf75.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfObject("TicketsCheckpoint").Check CheckPoint("ticketsCheckpoint") @@ hightlight id_;_2067642096_;_script infofile_;_ZIP::ssf91.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfObject("fromcityCheckpoint").Check CheckPoint("fromcityCheckpoint") @@ hightlight id_;_2061495392_;_script infofile_;_ZIP::ssf92.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfObject("tocitycheckpoint").Check CheckPoint("tocityCheckpoint")


wait (3)

'Order button clicked to book the flight
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click

WpfWindow("Micro Focus MyFlight Sample").Close

NEXT
 @@ hightlight id_;_1994433456_;_script infofile_;_ZIP::ssf93.xml_;_
 
 @@ hightlight id_;_2005040208_;_script infofile_;_ZIP::ssf116.xml_;_
