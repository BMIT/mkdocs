# Helper to create an Event

The backend was setup to ingest Events from ATDW, however, some events are being manually entered and there are 3 fields in particular that are not user friendly as they require the value to be entered in JSON format and as of <span class="current-date"></span> the following helpers functions are to used to ease the entry process

[https://reset.beda.systems/event-helper](https://reset.beda.systems/event-helper)

## Event dates

### Backend date fields explained
`Event Start Date:` This is the date the event starts. This field is used when searching by dates.
`Event End Date:` This is the date the event ends and also, after this date the Event will no longer be available on the Front End. This field is used when searching by dates.

`Event Dates`: Is a tricky field and can be very complex to enter, but is an important field to calculate the next occurance. Use the Event dates function in the helper to fill the information. 
Go to the [Event helper page](https://reset.beda.systems/event-helper) and the first section is Event dates helper. Enter the start date and end date and adjust the times as needed. Once happy, click on generate JSON. Copy the generated value in `Event Dates` field 
<iframe src="https://scribehow.com/embed/Set_event_dates_in_Sitecore_CMS__j5pVMx54Q_uBISQvCk7s5g?as=scrollable&skipIntro=true" width="100%" height="640" allowfullscreen frameborder="0"></iframe>

## Address helper
This helper is useful in generating the Address in JSON format, inorder to make the process even simpler, typing the Address or the Venue name fills all the details that JSON requires including the Latitude and Longitude information. 

In the Name field, start typing the Address or name of the place and it will automatically generate all the details. Make a necessary changes e.g trim the name and click on generate JSON and the string can be copied into the `Event Venues` field

## Image helper
Use this to populate the `Product Image` field.

## Step by step Guide for Event helper
<iframe src="https://scribehow.com/embed/How_to_Generate_JSON_for_Event_entry__dHIuhyOOQhiBwcpeAoQlAQ?as=scrollable&skipIntro=true" width="100%" height="640" allowfullscreen frameborder="0"></iframe>