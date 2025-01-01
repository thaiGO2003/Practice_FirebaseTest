<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hướng Dẫn Cài Đặt Dự Án</title>
</head>
<body>
        <img src="https://github.com/user-attachments/assets/6448dab8-04b3-41c6-9a2f-8f459a3dcca5" alt="Hướng dẫn cài đặt" style="max-width: 100%; height: auto;">
    <h1>Hướng Dẫn Cài Đặt Dự Án</h1>

    <h2>1. Clone repository</h2>
    <p>Đầu tiên, bạn cần clone repository về máy của mình:</p>
    <pre><code>git clone &lt;your-repository-url&gt;</code></pre>

    <h2>2. Cài đặt dependencies</h2>
    <p>Đi tới thư mục dự án và cài đặt tất cả dependencies cần thiết:</p>
    <pre><code>npm install
# Hoặc nếu bạn sử dụng Yarn:
# yarn install</code></pre>

    <h2>3. Cấu hình biến môi trường</h2>
    <p>Để ứng dụng hoạt động với Firebase và các dịch vụ khác, bạn cần cấu hình các biến môi trường.</p>

    <h3>Tạo tệp <code>.env</code></h3>
    <p>Biến môi trường được định nghĩa trong tệp <code>.env</code>. Nếu bạn chưa có tệp <code>.env</code>, bạn có thể tạo một tệp mới từ tệp <code>.env.example</code> trong thư mục gốc của dự án:</p>
    <pre><code>cp .env.example .env</code></pre>

    <h3>Thêm thông tin Firebase của bạn</h3>
    <p>Sau khi tạo tệp <code>.env</code>, bạn mở tệp và thêm các giá trị cấu hình Firebase của mình. Dưới đây là danh sách các biến cần thiết:</p>
    <pre><code>REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
REACT_APP_MEASUREMENT_ID=your_measurement_id</code></pre>

    <h3>Cách lấy thông tin cấu hình Firebase</h3>
    <p>Để lấy các giá trị này, làm theo các bước sau:</p>
    <ol>
        <li>Truy cập <a href="https://console.firebase.google.com/" target="_blank">Firebase Console</a>.</li>
        <li>Chọn dự án của bạn hoặc tạo mới nếu cần.</li>
        <li>Đi tới <strong>Cài đặt Dự án</strong> (biểu tượng bánh răng bên cạnh <strong>Tổng quan Dự án</strong>).</li>
        <li>Trong phần <strong>Ứng dụng của bạn</strong>, chọn ứng dụng <strong>Web</strong> (hoặc tạo mới nếu cần).</li>
        <li>Bạn sẽ thấy một đối tượng cấu hình bao gồm các giá trị như <code>apiKey</code>, <code>authDomain</code>, <code>projectId</code>, v.v. Sao chép các giá trị này và dán vào tệp <code>.env</code>.</li>
    </ol>

    <h3>Ví dụ:</h3>
    <pre><code>REACT_APP_API_KEY=AIzaSyBpTPEoJMu54vDoxQGoRhqVy6ccUiC3Ba4
REACT_APP_AUTH_DOMAIN=fir-test-236ee.firebaseapp.com
REACT_APP_PROJECT_ID=fir-test-236ee
REACT_APP_STORAGE_BUCKET=fir-test-236ee.appspot.com
REACT_APP_MESSAGING_SENDER_ID=699695973700
REACT_APP_APP_ID=1:699695973700:web:b69a7b1605f4a15ec50311
REACT_APP_MEASUREMENT_ID=G-0HYMG5FZTV</code></pre>

    <h2>4. Chạy dự án</h2>
    <p>Bây giờ bạn đã cấu hình các biến môi trường, bạn có thể chạy dự án.</p>

    <h3>Đối với Android:</h3>
    <pre><code>npx react-native run-android</code></pre>

    <h3>Đối với iOS:</h3>
    <pre><code>npx react-native run-ios</code></pre>

    <h3>Đối với Web (nếu có):</h3>
    <pre><code>npm start</code></pre>

    <h2>5. Lưu ý quan trọng</h2>
    <ul>
        <li><strong>Không bao giờ commit tệp <code>.env</code></strong> vào hệ thống quản lý phiên bản. Nó chứa thông tin nhạy cảm và cần được bảo mật. Hãy chắc chắn rằng tệp <code>.env</code> đã được thêm vào <code>.gitignore</code>.</li>
        <li>Nếu bạn đang làm việc nhóm, <strong>hãy chia sẻ hướng dẫn thiết lập tệp <code>.env</code></strong>, nhưng <strong>không bao giờ chia sẻ tệp <code>.env</code> của bạn</strong> trực tiếp.</li>
    </ul>

    <h2>6. Khắc phục sự cố</h2>
    <p>Nếu gặp phải bất kỳ vấn đề nào, vui lòng kiểm tra các điều sau:</p>
    <ul>
        <li>Kiểm tra kỹ để chắc chắn rằng bạn đã điền đầy đủ các biến môi trường trong tệp <code>.env</code>.</li>
        <li>Đảm bảo rằng bạn đã có cấu hình Firebase chính xác từ phần cài đặt Firebase của dự án.</li>
        <li>Trong trường hợp có lỗi liên quan đến Firebase, hãy kiểm tra lại các thông tin đăng nhập và thử tạo lại các khóa API hoặc thông tin ứng dụng trong Firebase.</li>
    </ul>

    <hr>

    <h1>Project Setup Guide</h1>

    <h2>1. Clone the repository</h2>
    <p>First, you need to clone the repository to your local machine:</p>
    <pre><code>git clone &lt;your-repository-url&gt;</code></pre>

    <h2>2. Install dependencies</h2>
    <p>Navigate to the project directory and install all the necessary dependencies:</p>
    <pre><code>npm install
# Or if you use Yarn:
# yarn install</code></pre>

    <h2>3. Set up environment variables</h2>
    <p>In order for the application to work with Firebase and other services, you need to configure the environment variables.</p>

    <h3>Create <code>.env</code> file</h3>
    <p>The environment variables are defined in the <code>.env</code> file. If you don’t already have a <code>.env</code> file, you can create one based on the <code>.env.example</code> file in the root of the project.</p>
    <pre><code>cp .env.example .env</code></pre>

    <h3>Add your Firebase credentials</h3>
    <p>After creating the <code>.env</code> file, open it and add your Firebase configuration values. Here is the list of required variables that need to be set:</p>
    <pre><code>REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
REACT_APP_MEASUREMENT_ID=your_measurement_id</code></pre>

    <h3>Where to find your Firebase configuration</h3>
    <p>To get these values, follow these steps:</p>
    <ol>
        <li>Go to the <a href="https://console.firebase.google.com/" target="_blank">Firebase Console</a>.</li>
        <li>Select your project or create a new one.</li>
        <li>Navigate to <strong>Project Settings</strong> (the gear icon next to <strong>Project Overview</strong>).</li>
        <li>In the <strong>Your apps</strong> section, select the <strong>Web</strong> app (or create one if necessary).</li>
        <li>You will see a configuration object that includes <code>apiKey</code>, <code>authDomain</code>, <code>projectId</code>, etc. Copy these values and paste them into your <code>.env</code> file.</li>
    </ol>

    <h3>Example:</h3>
    <pre><code>REACT_APP_API_KEY=AIzaSyBpTPEoJMu54vDoxQGoRhqVy6ccUiC3Ba4
REACT_APP_AUTH_DOMAIN=fir-test-236ee.firebaseapp.com
REACT_APP_PROJECT_ID=fir-test-236ee
REACT_APP_STORAGE_BUCKET=fir-test-236ee.appspot.com
REACT_APP_MESSAGING_SENDER_ID=699695973700
REACT_APP_APP_ID=1:699695973700:web:b69a7b1605f4a15ec50311
REACT_APP_MEASUREMENT_ID=G-0HYMG5FZTV</code></pre>

    <h2>4. Running the project</h2>
    <p>Now that you've set up your environment variables, you can run the project.</p>

    <h3>For Android:</h3>
    <pre><code>npx react-native run-android</code></pre>

    <h3>For iOS:</h3>
    <pre><code>npx react-native run-ios</code></pre>

    <h3>For Web (if applicable):</h3>
    <pre><code>npm start</code></pre>

    <h2>5. Important Notes</h2>
    <ul>
        <li><strong>Never commit your <code>.env</code> file</strong> to version control. It contains sensitive information that should be kept private. Make sure that <code>.env</code> is included in the <code>.gitignore</code> file.</li>
        <li>If you are collaborating on this project, <strong>always share the <code>.env</code> setup instructions</strong>, but <strong>never share your <code>.env</code> file</strong> directly.</li>
    </ul>

    <h2>6. Troubleshooting</h2>
    <p>If you encounter any issues, please check the following:</p>
    <ul>
        <li>Double-check that you have filled in all the environment variables in the <code>.env</code> file.</li>
        <li>Ensure that you have the correct Firebase configuration from your Firebase project settings.</li>
        <li>If there are errors related to Firebase, review the credentials and try regenerating any API keys or app credentials in Firebase.</li>
    </ul>
</body>
</html>
