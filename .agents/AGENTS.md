# Project Rules & Workflow Instructions: Vietnam International Study Tour 2026 (ADBA)

## 👑 QUY TẮC PHÂN CẤP CHỈ ĐẠO & VAI TRÒ BẮT BUỘC (MANDATORY CHAIN OF COMMAND)
- **Cấp trên / Product Owner**: Người dùng là cấp trên duy nhất, trực tiếp trao đổi và ban hành chỉ thị cho **Lead Agent** (Kiến trúc sư Trưởng / Quản lý Kỹ thuật).
- **Lead Agent**: Là đầu mối chịu trách nhiệm cao nhất trước Người dùng:
  1. **Tiếp nhận & Lắng nghe**: Tiếp nhận mọi chỉ đạo, ý tưởng và yêu cầu từ Người dùng.
  2. **Lập Kế hoạch & Trình duyệt (Chỉ Code Cục Bộ)**:
     - Bóc tách nhiệm vụ, lập bản checklist chi tiết / wireframe phương án ngắn gọn và trình Người dùng phê duyệt trước khi động vào code.
     - **TUYỆT ĐỐI CẤM đưa các bước Git commit hay Git push vào bản kế hoạch trình duyệt**. Kế hoạch chỉ được chứa đúng phạm vi sửa code.
  3. **Quy định Thực thi khi nhận lệnh 'duyệt' / 'triển khai' (CHỈ SỬA LOCAL - HARD-LOCK)**:
     - Nhận lệnh "triển khai", "duyệt", "tiến hành", "approve" -> Lead Agent **CHỈ ĐƯỢC PHÉP** gọi công cụ sửa file cục bộ (`replace_file_content`, `multi_replace_file_content`, `write_to_file`).
     - **NGHIÊM CẤM 100% GỌI LỆNH TERMINAL GIT COMMIT/PUSH HOẶC DEPLOY TRONG LƯỢT NÀY**.
     - Sửa code xong: **DỪNG LƯỢT NGAY LẬP TỨC** và báo cáo kết quả kèm URL Localhost `http://localhost:8080/` để Người dùng tự kiểm tra trực quan.
  4. **Cơ chế Kích hoạt Bàn giao GitHub (CHỈ DUY NHẤT KHI CÓ TỪ KHÓA 'DONE')**:
     - **CÔNG TẮC DUY NHẤT (SOLE TRIGGER)**: Lead Agent CHỈ ĐƯỢC PHÉP thực hiện chu trình Bàn giao GitHub (`git add .` -> `git commit` -> `git push origin main`) khi nhận được tin nhắn chứa rõ ràng từ khóa **"done"** (hoặc "báo done") từ Người dùng.
     - Mọi từ ngữ khác như *"ok"*, *"được rồi"*, *"tốt rồi"*, *"đẹp rồi"*, *"chuẩn rồi"*... **TUYỆT ĐỐI KHÔNG ĐƯỢC COI LÀ LỆNH BÀN GIAO / PUSH GITHUB**.
  5. **TUYỆT ĐỐI CẤM TỰ Ý CHỤP ẢNH NGHIỆM THU / CHẠY BROWSER**: Người dùng tự kiểm tra trực quan trên Localhost (`http://localhost:8080/`). AI tuyệt đối KHÔNG tự ý kích hoạt browser subagent hay tự ý chụp ảnh màn hình nghiệm thu trừ khi Người dùng có yêu cầu cụ thể bằng văn bản.
  6. **TUYỆT ĐỐI CẤM TỰ Ý SỬA TỆP QUY TẮC NÀY**: Nghiêm cấm mọi hành vi tự ý sửa đổi hoặc ghi đè `.agents/AGENTS.md` trừ khi có chỉ thị trực tiếp từ Người dùng.

---

## 🛑 CƠ CHẾ NGẮT CỨNG MÁY TRẠNG THÁI (STATE MACHINE CIRCUIT BREAKER)

| Trạng thái | Điều kiện kích hoạt từ Người dùng | Hành vi AI ĐƯỢC PHÉP | Hành vi AI BỊ CẤM TUYỆT ĐỐI |
| :--- | :--- | :--- | :--- |
| **STATE 1: Lập Kế hoạch** | Người dùng gửi yêu cầu / ý tưởng | Khảo sát file trong thư mục, trình Checklist Trước & Sau (chỉ phạm vi code). | ❌ CẤM sửa file.<br>❌ CẤM ghi bước Git/Deploy vào kế hoạch. |
| **STATE 2: Thực thi Local** | Người dùng gõ: `duyệt`, `triển khai`, `tiến hành`, `approve` | Dùng tool sửa file local (`replace_file_content`, `write_to_file`). Dừng lượt báo Localhost. | ❌ CẤM chạy `git commit`, `git push`.<br>❌ CẤM chạy script deploy ngầm. |
| **STATE 3: Bàn giao Live** | Người dùng gõ đúng từ khóa: **`done`** (hoặc `báo done`) | Commit Git chuẩn Conventional Commits -> Push lên GitHub repo -> Cung cấp Repo URL. | ❌ CẤM tự ý push khi User chỉ mới khen "đẹp", "ok", "tốt". Phải có chữ "done"! |

---

## 🛡️ 4 ĐIỀU RĂN CỐT LÕI (CORE PRINCIPLES CHO DỰ ÁN ADBA 2026)

### 1. QUY CHUẨN BÀN GIAO GITHUB (GITHUB-ONLY DEPLOYMENT)
- **Repository chính thức**: `https://github.com/minhnntrademkt/vietnam-international-study-tour-2026.git` (branch `main`).
- **Phạm vi triển khai**: Dự án hiện tại **chỉ quản lý mã nguồn và bàn giao qua GitHub**, hoàn toàn chưa có luồng đẩy lên hosting qua FTP.
- **Quy trình khi nhận lệnh "done"**:
  1. Cập nhật version query string cho asset (`styles.css?v=YYYYMMDD_HHMM`, `app.js?v=YYYYMMDD_HHMM`) để đảm bảo cache-busting.
  2. Kiểm tra `git status` đảm bảo sạch sẽ.
  3. Tạo commit chuẩn mực: `git add .`, `git commit -m "feat/fix: ..."`
  4. Đẩy mã nguồn: `git push origin main`.
  5. Báo cáo link repository và commit hash cho Người dùng.

### 2. TIÊU CHUẨN ĐỒNG BỘ SONG NGỮ ANH - VIỆT TUYỆT ĐỐI (MANDATORY BILINGUAL SYNCHRONIZATION)
- **Tiếng Anh là ngôn ngữ mặc định (Primary/Default)**: Đảm bảo văn phong y khoa, quản trị học thuật chuẩn quốc tế theo quy chuẩn của Australian Doctors Business Academy (ADBA).
- **Quy tắc Đồng bộ Song ngữ Bắt buộc (Mandatory Sync Rule)**: Mỗi lần Người dùng hoặc AI chỉnh sửa, bổ sung hoặc thay đổi bất kỳ nội dung tiếng Anh nào, AI **BẮT BUỘC** phải chỉnh sửa và cập nhật ngay bản dịch tiếng Việt tương ứng trên toàn bộ các tệp dự án (`translations.js`, `index.html`, `speakers-data.js`, `agenda.json`). Tuyệt đối không để xảy ra tình trạng tiếng Anh thay đổi nhưng tiếng Việt bị bỏ sót hoặc không khớp nghĩa.

### 3. NHẬN DIỆN THƯƠNG HIỆU CHUẨN AUSTRALIAN DOCTORS BUSINESS ACADEMY (ADBA)
- **Bảng màu nhận diện**:
  - Primary Brand Blue: `#0077b6` / `#0288d1` (Xanh y tế chuyên nghiệp).
  - Accent Cyan/Teal: `#00b4d8` / `#00c2cb` (Xanh ngọc đại diện cho chuyển đổi số và công nghệ y tế).
  - Dark Slate/Navy: `#0a192f` / `#0f172a` (Tạo độ tương phản cao, cao cấp).
  - Light Background: `#ffffff` & `#f8fafc` / `#f0f9ff`.
  - Chứng chỉ CPD: Huy hiệu AMA CPD Home 2026 (Teal/Emerald Green `#10b981`).
- **Typography & Layout**: Hiện đại, sang trọng, tương thích cao với cả màn hình Retina MacBook và smartphone (iPhone 14/15/16 Pro Max), touch target >= 44px, không có lỗi cuộn ngang.
- **Logo & Footer**: Sử dụng logo ADBA chuẩn và cấu trúc chân trang đồng bộ với website chính `doctorsbusinessacademy.com.au` (đầy đủ các liên kết pháp lý: Terms, Conditions, Privacy Policy).

### 4. BẢO TOÀN DỮ LIỆU SỰ KIỆN & QUY CÁCH DIỄN GIẢ (CONTENT INTEGRITY & MOCKUP SPEAKERS)
- **Thông tin lịch trình**: Đầy đủ và chính xác 100% theo chương trình 7 ngày tại Đà Nẵng, Vinmec, BV Đà Nẵng, Hội An, Bà Nà Hills.
- **Khối Diễn giả**: Tạm thời xây dựng theo dạng **Mockup Speaker Cards** với khung avatar hover tinh tế, chức danh/tổ chức hiển thị `TBC / TBU` hoặc danh vị dự kiến, sẵn sàng tích hợp hồ sơ thực tế khi có danh sách chính thức từ ban tổ chức.

---

## 🚫 ZERO-LEAKAGE SCOPE-LOCK
- Thư mục hoạt động hợp lệ duy nhất của dự án:
  `d:\Landing Page\vietnam-international-study-tour-2026\`
- Mọi thao tác tìm kiếm (`grep_search`), xem file (`view_file`), sửa file (`replace_file_content`, `write_to_file`), chạy lệnh terminal (`run_command`) **BẮT BUỘC CHỈ ĐƯỢC PHÉP HOẠT ĐỘNG BÊN TRONG THƯ MỤC NÀY**.
- Nghiêm cấm mọi hành vi quét, can thiệp hoặc ghi đè sang các thư mục dự án khác (`Landing DNGBS`, `TradeMKT`, `marvell`, v.v.).
