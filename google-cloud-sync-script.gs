/**
 * নিজের Google Account (Google Drive ও Google Sheets)-এ আজীবন ফ্রিতে সব হিসাব-নিকাশ ও নোট স্টোর করার স্ক্রিপ্ট:
 * ১. https://script.google.com এ যান এবং 'New Project' খুলুন।
 * ২. নিচের কোডটি পেস্ট করে 'Deploy' -> 'New deployment' -> 'Web app' সিলেক্ট করুন।
 * ৩. 'Who has access: Anyone' দিয়ে Deploy করুন এবং পাওয়া Web App URL টি অ্যাপের 'Google মেঘ সিঙ্ক' অপশনে বসান।
 */
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var props = PropertiesService.getScriptProperties();
  props.setProperty('LATEST_BACKUP', JSON.stringify(data));
  return ContentService.createTextOutput(JSON.stringify({ status: 'success', syncedAt: new Date() }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var props = PropertiesService.getScriptProperties();
  var raw = props.getProperty('LATEST_BACKUP') || '{}';
  return ContentService.createTextOutput(raw)
    .setMimeType(ContentService.MimeType.JSON);
}
