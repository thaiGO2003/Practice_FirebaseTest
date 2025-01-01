![image](https://github.com/user-attachments/assets/6448dab8-04b3-41c6-9a2f-8f459a3dcca5)
# Hướng dẫn Cài Đặt và Chạy Dự Án

## 1. Clone Repository

Đầu tiên, bạn cần clone repository về máy của mình:

```bash
git clone <your-repository-url>
##2. Cài Đặt Dependencies
Đi đến thư mục dự án và cài đặt các dependencies cần thiết:

bash

npm install
# Hoặc nếu bạn sử dụng Yarn:
# yarn install
##3. Cấu Hình Biến Môi Trường
Để ứng dụng có thể hoạt động với Firebase và các dịch vụ khác, bạn cần cấu hình các biến môi trường.

Tạo tệp .env
Các biến môi trường được định nghĩa trong tệp .env. Nếu bạn chưa có tệp .env, bạn có thể tạo nó từ tệp .env.example có sẵn trong thư mục gốc của dự án:

bash

cp .env.example .env
Thêm Thông Tin Firebase
Mở tệp .env và thêm các giá trị cấu hình Firebase của bạn. Đây là danh sách các biến cần thiết:

env

REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
REACT_APP_MEASUREMENT_ID=your_measurement_id
Lấy Thông Tin Cấu Hình Firebase
Để lấy các giá trị này, làm theo các bước sau:

Truy cập vào Firebase Console.
Chọn dự án của bạn hoặc tạo một dự án mới.
Đi đến Cài Đặt Dự Án (biểu tượng bánh răng bên cạnh Tổng Quan Dự Án).
Trong phần Ứng dụng của bạn, chọn ứng dụng Web (hoặc tạo một ứng dụng Web nếu chưa có).
Bạn sẽ thấy một đối tượng cấu hình bao gồm các giá trị như apiKey, authDomain, projectId, v.v. Sao chép các giá trị này và dán vào tệp .env.
Ví Dụ:
env

REACT_APP_API_KEY=AIzaSyBpTPEoJMu54vDoxQGoRhqVy6ccUiC3Ba4
REACT_APP_AUTH_DOMAIN=fir-test-236ee.firebaseapp.com
REACT_APP_PROJECT_ID=fir-test-236ee
REACT_APP_STORAGE_BUCKET=fir-test-236ee.appspot.com
REACT_APP_MESSAGING_SENDER_ID=699695973700
REACT_APP_APP_ID=1:699695973700:web:b69a7b1605f4a15ec50311
REACT_APP_MEASUREMENT_ID=G-0HYMG5FZTV
##4. Chạy Dự Án
Bây giờ bạn đã cấu hình các biến môi trường, bạn có thể chạy dự án.

Đối với Android:
bash

npx react-native run-android
Đối với iOS:
bash

npx react-native run-ios
Đối với Web (nếu có):
bash

npm start
##5. Lưu Ý Quan Trọng
Không bao giờ commit tệp .env vào hệ thống kiểm soát phiên bản. Nó chứa các thông tin nhạy cảm cần phải được bảo mật. Đảm bảo rằng tệp .env đã được thêm vào .gitignore.
Nếu bạn đang hợp tác trong dự án, chỉ chia sẻ hướng dẫn thiết lập tệp .env, nhưng không chia sẻ tệp .env trực tiếp.
6. Khắc Phục Lỗi
Nếu bạn gặp phải bất kỳ vấn đề nào, hãy kiểm tra các vấn đề sau:

Đảm bảo rằng bạn đã điền đầy đủ tất cả các biến môi trường trong tệp .env.
Kiểm tra lại cấu hình Firebase của bạn và đảm bảo bạn đã sao chép chính xác các giá trị từ cài đặt Firebase.
Nếu có lỗi liên quan đến Firebase, kiểm tra lại thông tin đăng nhập và thử tạo lại các khóa API hoặc thông tin ứng dụng trong Firebase.
#Setup and Run Guide (English)
##1. Clone the Repository
First, clone the repository to your local machine:

bash

git clone <your-repository-url>
##2. Install Dependencies
Navigate to the project folder and install the required dependencies:

bash

npm install
# Or if you use Yarn:
# yarn install
##3. Configure Environment Variables
To make the application work with Firebase and other services, you need to set up the environment variables.

Create the .env File
The environment variables are defined in the .env file. If you don’t have a .env file, you can create one from the .env.example file in the project root:

bash

cp .env.example .env
Add Firebase Credentials
Open the .env file and add your Firebase configuration values. Here is the list of required variables:

env

REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
REACT_APP_MEASUREMENT_ID=your_measurement_id
How to Get Firebase Configuration
To get these values, follow these steps:

Go to the Firebase Console.
Select your project or create a new project.
Go to Project Settings (the gear icon next to Project Overview).
In the Your Apps section, select the Web app (or create a web app if needed).
You will see a configuration object that includes apiKey, authDomain, projectId, etc. Copy these values and paste them into your .env file.
Example:
env

REACT_APP_API_KEY=AIzaSyBpTPEoJMu54vDoxQGoRhqVy6ccUiC3Ba4
REACT_APP_AUTH_DOMAIN=fir-test-236ee.firebaseapp.com
REACT_APP_PROJECT_ID=fir-test-236ee
REACT_APP_STORAGE_BUCKET=fir-test-236ee.appspot.com
REACT_APP_MESSAGING_SENDER_ID=699695973700
REACT_APP_APP_ID=1:699695973700:web:b69a7b1605f4a15ec50311
REACT_APP_MEASUREMENT_ID=G-0HYMG5FZTV
##4. Run the Project
Now that you have set up the environment variables, you can run the project.

For Android:
bash

npx react-native run-android
For iOS:
bash

npx react-native run-ios
For Web (if applicable):
bash

npm start
##5. Important Notes
Never commit your .env file to version control. It contains sensitive information that should be kept private. Ensure that the .env file is added to .gitignore.
If you are collaborating on this project, always share the setup instructions for the .env file, but never share the .env file directly.
6. Troubleshooting
If you encounter any issues, check the following:

Double-check that you have filled in all the environment variables in the .env file.
Ensure that you have the correct Firebase configuration from your Firebase project settings.
If there are errors related to Firebase, review the credentials and try regenerating any API keys or app credentials in Firebase.
