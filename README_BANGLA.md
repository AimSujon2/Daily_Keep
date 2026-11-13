# স্মার্ট ডেইলি ও কিপ প্রো — GitHub থেকে APK বানানোর নিয়ম

## ১. APK তৈরি (২–৩ মিনিট)
১. GitHub-এ নতুন একটি রিপোজিটরি (Repository) খুলুন।
২. এই zip আনজিপ করে ভেতরের **সব ফাইল ও ফোল্ডার** (`.github`, `www`, `package.json`, `capacitor.config.json`, `.gitignore`) রিপোজিটরিতে আপলোড করে **Commit** করুন। (`.github` ফোল্ডারটি বাদ গেলে বিল্ড চালু হবে না।)
৩. উপরের **Actions** ট্যাবে যান। **Build Android APK Automatically** নিজে থেকে চালু হবে। না হলে বাঁ পাশ থেকে সেটি খুলে **Run workflow** চাপুন।
৪. সবুজ টিক (✔) এলে বিল্ডে ক্লিক করুন, নিচে **Artifacts** থেকে **Smart-Daily-Keep-Pro-APK** ডাউনলোড করুন। zip খুললে `app-debug.apk` পাবেন, ফোনে ইনস্টল করুন।

## ২. ইনস্টলের পর ফোনে যা করতে হবে (অ্যালার্মের জন্য জরুরি)
- প্রথমবার অ্যাপ খুললে **Notification** অনুমতি দিন।
- Android 12+ হলে Settings → Apps → Daily Keep → **Alarms & reminders** চালু করুন।
- ব্যাটারি সেভারে অ্যাপটিকে **Unrestricted** করে দিন, নইলে কিছু ফোনে অ্যালার্ম দেরিতে বাজে।

## ৩. যা অ্যাপের ভেতরেই আছে (ইন্টারনেট ছাড়া চলে)
Tailwind CSS, Tiro Bangla ফন্ট, নোট, টাস্ক ও অ্যালার্ম। শুধু Google মেঘ সিঙ্কে নেট লাগে।

## ৪. Google অ্যাকাউন্টে ডেটা ব্যাকআপ
১. `google-cloud-sync-script.gs`-এর কোড https://script.google.com এ নতুন প্রজেক্টে পেস্ট করুন।
২. **Deploy → New deployment → Web app**, Access: `Anyone` দিয়ে Deploy করুন।
৩. পাওয়া `https://script.google.com/macros/s/.../exec` লিংক অ্যাপের **Google মেঘ সিঙ্ক** বাটনে বসান।
