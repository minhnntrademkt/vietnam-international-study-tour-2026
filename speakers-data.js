/**
 * Australian Doctors Business Academy (ADBA)
 * Vietnam International Study Tour 2026 — Official Speakers Dataset (Bilingual EN/VI)
 */

const SPEAKERS_DATA = [
  // 1. Dr Sayanta Jana
  {
    id: "dr-sayanta-jana",
    name: "Dr. Sayanta Jana",
    category: "keynote",
    categoryLabelEn: "ADBA Leadership & Host",
    categoryLabelVi: "Chủ trì ADBA & Khóa chính",
    photo: "", // full-bleed medical executive placeholder avatar
    roleEn: "Academic Dean",
    roleVi: "Trưởng khoa Học thuật",
    orgEn: "Australian Doctors Business Academy (ADBA)",
    orgVi: "Viện Kinh doanh Y khoa Úc (ADBA)",
    sessionEn: "Welcome Orientation & Academic Wrap-Up",
    sessionVi: "Định hướng Học thuật & Bế mạc Chuyên môn",
    badges: ["🇦🇺 Australian Faculty Lead", "🎓 ADBA Academic Dean"],
    badgesVi: ["🇦🇺 Trưởng ban Giảng huấn Úc", "🎓 Trưởng khoa Học thuật ADBA"],
    bioEn: `Dr. Sayanta Jana is the Academic Dean of the Australian Doctors Business Academy (ADBA). With extensive leadership in clinical education and healthcare management across Australia, Dr. Jana directs the academic curriculum, CPD quality assurance under the AMA CPD Home framework, and international clinical immersion partnerships for Australian medical executives.`,
    bioVi: `Bác sĩ Sayanta Jana là Trưởng khoa Học thuật của Viện Kinh doanh Y khoa Úc (ADBA). Với bề dày lãnh đạo trong đào tạo lâm sàng và quản trị y tế tại Úc, TS. Jana trực tiếp chỉ đạo chương trình học thuật, kiểm định chất lượng tín chỉ CPD theo khung AMA CPD Home và phát triển quan hệ hợp tác khảo sát y tế quốc tế cho các bác sĩ và nhà quản lý y tế Úc.`
  },

  // 2. Dr. Tran Van Thuan
  {
    id: "dr-tran-van-thuan",
    name: "Dr. Tran Van Thuan (TBC)",
    category: "keynote",
    categoryLabelEn: "Keynote & Policy",
    categoryLabelVi: "Chính sách & Khóa chính",
    photo: "",
    roleEn: "Deputy Minister of Health",
    roleVi: "Thứ trưởng Bộ Y tế",
    orgEn: "Ministry of Health, Vietnam",
    orgVi: "Bộ Y tế Việt Nam",
    sessionEn: "Opening Keynote: Vietnam's Universal Health Journey & Digital Foundations",
    sessionVi: "Phiên Khai mạc: Hành trình Y tế Toàn dân & Nền tảng Số hóa tại Việt Nam",
    badges: ["🇻🇳 National Health Leadership", "🏛️ Ministry of Health Vietnam"],
    badgesVi: ["🇻🇳 Lãnh đạo Y tế Quốc gia", "🏛️ Bộ Y tế Việt Nam"],
    bioEn: `Assoc. Prof. Dr. Tran Van Thuan serves as Deputy Minister of Health of Vietnam. A leading medical academic, oncologist, and public health strategist, Dr. Thuan oversees national healthcare policy formulation, digital health transformation, and public-private healthcare legal frameworks.`,
    bioVi: `PGS. TS. BS. Trần Văn Thuấn là Thứ trưởng Bộ Y tế Việt Nam. Là chuyên gia ung bướu hàng đầu và nhà hoạch định chiến lược y tế công cộng, Thứ trưởng Thuấn phụ trách nhiều lĩnh vực trọng yếu về hoạch định chính sách y tế quốc gia, chuyển đổi số ngành y tế và khung pháp lý phát triển y tế công - tư.`
  },

  // 3. Mr. Bao Tran (From DNGBS)
  {
    id: "mr-bao-tran",
    name: "Mr. BAO TRAN",
    category: "invest",
    categoryLabelEn: "Healthcare Investment & Advisory",
    categoryLabelVi: "Đầu tư Y tế & Cố vấn Cấp cao",
    photo: "assets/images/speakers/tran-quoc-bao.jpg",
    roleEn: "Senior Advisor & Healthcare Executive",
    roleVi: "Cố vấn Cấp cao & Chuyên gia Điều hành Y tế",
    orgEn: "Asian Hospital & Healthcare Management (AHHM)",
    orgVi: "Tạp chí Asian Hospital & Healthcare Management (AHHM)",
    sessionEn: "Healthcare Financing, Private Hospital Scaling & M&A Landscape in Vietnam",
    sessionVi: "Tài chính Y tế, Mở rộng Bệnh viện Tư nhân & Toàn cảnh M&A Y tế tại Việt Nam",
    badges: ["🏆 VCCI Hospital CEO of the Year 2024", "🌐 Senior Advisor AHHM", "💼 CFA · CMT · CPWA · 12 M&A"],
    badgesVi: ["🏆 CEO Bệnh viện của Năm 2024 (VCCI)", "🌐 Cố vấn Cấp cao AHHM", "💼 CFA · CMT · CPWA · 12 Thương vụ M&A"],
    bioEn: `Mr. Bao Tran is a Vietnamese healthcare executive and investment advisor with more than 15 years of experience spanning hospital management, healthcare investment, and corporate finance. He is the first Vietnamese appointed as Senior Advisor to Asian Hospital & Healthcare Management (AHHM), one of the Asia-Pacific region's leading B2B healthcare platforms. Bao has held chief executive and senior leadership positions across Vietnam's private healthcare sector, including CEO of Prima Saigon Medical Center, Hoan My International Eye Hospital, and City International Hospital. Earlier in his career, he held senior management roles at FV Hospital, TMMC Healthcare, and Cao Thang International Eye Hospital. He was recognized as Hospital Chief Executive Officer of the Year 2024 by the Vietnam Chamber of Commerce and Industry (VCCI). With professional credentials including CFA, CMT, and CPWA, Bao has advised on 12 healthcare mergers and acquisitions across Vietnam.`,
    bioVi: `Ông Bảo Trần là chuyên gia điều hành và cố vấn đầu tư y tế hàng đầu với hơn 15 năm kinh nghiệm về quản trị bệnh viện, đầu tư y tế và tài chính doanh nghiệp. Ông là người Việt Nam đầu tiên được bổ nhiệm làm Cố vấn Cấp cao của Asian Hospital & Healthcare Management (AHHM) - nền tảng truyền thông y tế B2B hàng đầu khu vực Châu Á - Thái Bình Dương. Ông từng đảm nhiệm chức vụ Tổng Giám đốc tại Trung tâm Y khoa Prima Saigon, Bệnh viện Mắt Quốc tế Hoàn Mỹ, Bệnh viện Quốc tế City, cùng các vị trí quản lý cấp cao tại Bệnh viện FV, TMMC Healthcare và Bệnh viện Mắt Cao Thắng. Ông được VCCI vinh danh là Tổng Giám đốc Bệnh viện của Năm 2024. Với các chứng chỉ tài chính quốc tế CFA, CMT, CPWA, ông đã trực tiếp tư vấn 12 thương vụ M&A y tế và tham gia tái cấu trúc, mở rộng quy mô nhiều bệnh viện lớn tại Việt Nam.`
  },

  // 4. Dr. Mason Cobb (From DNGBS)
  {
    id: "dr-mason-cobb",
    name: "Dr. MASON COBB",
    category: "invest",
    categoryLabelEn: "Healthcare Founder & Senior Living",
    categoryLabelVi: "Sáng lập Y tế & Dưỡng lão Y khoa",
    photo: "assets/images/speakers/mason-cobb.png",
    roleEn: "US Board-Certified Surgeon & Chairman",
    roleVi: "Bác sĩ Phẫu thuật Hoa Kỳ & Chủ tịch Hội đồng Quản trị",
    orgEn: "Golden Sunrise Growth & Management | Victoria Healthcare",
    orgVi: "Golden Sunrise Growth & Management | Victoria Healthcare",
    sessionEn: "Building Sustainable Private Health Systems & Medicine 3.0 Senior Living in Vietnam",
    sessionVi: "Xây dựng Hệ thống Y tế Tư nhân Bền vững & Dưỡng lão Chuẩn Y học 3.0 tại Việt Nam",
    badges: ["🩺 US Board-Certified Surgeon", "🏥 Founder Victoria Healthcare & Columbia Asia", "🏡 Medicine 3.0 Senior Living"],
    badgesVi: ["🩺 Bác sĩ Phẫu thuật Chứng nhận Hoa Kỳ", "🏥 Sáng lập Victoria Healthcare & Columbia Asia", "🏡 Dưỡng lão Y học 3.0"],
    bioEn: `Dr. Loren Mason Cobb is a pioneering physician, surgeon, and healthcare leader who has advanced healthcare in Vietnam for over two decades. He was the Founding General Director and later Chairman of the Columbia-Gia Dinh International Clinic Joint Venture (now Columbia Asia). He also co-founded and led Victoria Healthcare Vietnam, developing one of the country's most trusted private healthcare systems. Currently, Dr. Mason serves as Chairman of Golden Sunrise Growth & Management JSC, leading the development of Vietnam's first world-class senior living facilities dedicated to preventive, predictive, and personalized healthcare (Medicine 3.0). Dr. Mason holds Board Certifications in Pediatric Surgery and General Surgery in the United States and has led multiple international medical missions.`,
    bioVi: `Bác sĩ Loren Mason Cobb là bác sĩ phẫu thuật và nhà lãnh đạo y tế tiên phong với hơn hai thập kỷ cống hiến cho sự phát triển của ngành y tế Việt Nam. Ông là Tổng Giám đốc Sáng lập và sau đó là Chủ tịch của Liên doanh Phòng khám Quốc tế Columbia - Gia Định (nay là Columbia Asia). Ông cũng là người đồng sáng lập và dẫn dắt Hệ thống Y khoa Quốc tế Victoria Healthcare, xây dựng một trong những hệ thống y tế tư nhân uy tín nhất tại Việt Nam. Hiện tại, ông là Chủ tịch của Golden Sunrise Growth & Management JSC, dẫn dắt phát triển các khu đô thị dưỡng lão chuẩn quốc tế đầu tiên tại Việt Nam ứng dụng mô hình Y học 3.0 (y học dự phòng, tiên đoán và cá thể hóa). Bác sĩ Mason sở hữu các chứng chỉ Hội đồng Ngoại khoa và Phẫu thuật Nhi tại Hoa Kỳ.`
  },

  // 5. Dr. Le Duc Nhan
  {
    id: "dr-le-duc-nhan",
    name: "Dr. Le Duc Nhan (TBC)",
    category: "hospital",
    categoryLabelEn: "Hospital Executives",
    categoryLabelVi: "Lãnh đạo Bệnh viện",
    photo: "",
    roleEn: "Hospital Director",
    roleVi: "Giám đốc Bệnh viện",
    orgEn: "Da Nang Hospital (Benh Vien Da Nang), Vietnam",
    orgVi: "Bệnh viện Đà Nẵng",
    sessionEn: "Universal Health Coverage on the Front Lines: Da Nang Hospital's Transformation",
    sessionVi: "Bảo hiểm Y tế Toàn dân Tuyến đầu: Bài học Chuyển đổi từ Bệnh viện Đà Nẵng",
    badges: ["🏥 Tertiary Hospital Leadership", "🩺 Central Vietnam Clinical Hub"],
    badgesVi: ["🏥 Lãnh đạo Bệnh viện Tuyến cuối", "🩺 Trung tâm Lâm sàng Miền Trung"],
    bioEn: `Dr. Le Duc Nhan is the Director of Da Nang Hospital, the leading tertiary care and surgical referral hospital in Central Vietnam. He has led the hospital through massive modernization, advancing organ transplantation, intensive trauma resuscitation, and public health insurance integration.`,
    bioVi: `TS. BS. Lê Đức Nhân là Giám đốc Bệnh viện Đà Nẵng - bệnh viện đa khoa hạng một tuyến cuối lớn nhất khu vực miền Trung và Tây Nguyên. Ông đã trực tiếp lãnh đạo bệnh viện qua nhiều bước phát triển vượt bậc về ghép tạng, hồi sức cấp cứu kỹ thuật cao và tối ưu hóa hệ thống chi trả bảo hiểm y tế phục vụ hàng triệu người dân.`
  },

  // 6. Dr. Nguyen Truong Son
  {
    id: "dr-nguyen-truong-son",
    name: "Dr. Nguyen Truong Son (TBC)",
    category: "keynote",
    categoryLabelEn: "Keynote & Policy",
    categoryLabelVi: "Chính sách & Khóa chính",
    photo: "",
    roleEn: "Former Vice Minister of Health",
    roleVi: "Nguyên Thứ trưởng Bộ Y tế",
    orgEn: "Ministry of Health, Vietnam",
    orgVi: "Bộ Y tế Việt Nam",
    sessionEn: "Financing Universal Health: Sustainable Models for Equitable Access in Vietnam",
    sessionVi: "Tài chính Y tế Toàn dân: Xây dựng Mô hình Bền vững cho Tiếp cận Công bằng tại Việt Nam",
    badges: ["🏛️ Former Vice Minister", "🏥 Former Cho Ray Hospital Director"],
    badgesVi: ["🏛️ Nguyên Thứ trưởng Bộ Y tế", "🏥 Nguyên Giám đốc BV Chợ Rẫy"],
    bioEn: `Assoc. Prof. Dr. Nguyen Truong Son is the Former Vice Minister of Health of Vietnam and former Director of Cho Ray Hospital. A highly respected health systems expert, Dr. Son provides invaluable insights into national health insurance policy, hospital autonomy, and equitable healthcare financing.`,
    bioVi: `PGS. TS. BS. Nguyễn Trường Sơn là Nguyên Thứ trưởng Bộ Y tế Việt Nam, Nguyên Giám đốc Bệnh viện Chợ Rẫy. Là chuyên gia uy tín hàng đầu về hệ thống y tế, ông mang tới những phân tích sâu sắc về chính sách bảo hiểm y tế quốc gia, cơ chế tự chủ bệnh viện và mô hình tài chính y tế công bằng.`
  },

  // 7. Dr. Nguyen Huu Thien
  {
    id: "dr-nguyen-huu-thien",
    name: "Dr. Nguyen Huu Thien (TBC)",
    category: "hospital",
    categoryLabelEn: "Hospital Executives",
    categoryLabelVi: "Lãnh đạo Bệnh viện",
    photo: "",
    roleEn: "Medical Director",
    roleVi: "Giám đốc Y khoa",
    orgEn: "Vinmec Da Nang International Hospital",
    orgVi: "Bệnh viện Đa khoa Quốc tế Vinmec Đà Nẵng",
    sessionEn: "Digital Health and Telemedicine Transforming Patient Care at Vinmec",
    sessionVi: "Y tế Số & Telemedicine Chuyển đổi Trải nghiệm Chăm sóc Người bệnh tại Vinmec",
    badges: ["🏥 Vinmec Healthcare System", "📱 Digital Health Innovator"],
    badgesVi: ["🏥 Hệ thống Y tế Vinmec", "📱 Tiên phong Y tế Số"],
    bioEn: `Dr. Nguyen Huu Thien serves as Medical Director at Vinmec Da Nang International Hospital, spearheading international JCI accreditation protocols, multi-disciplinary tumor boards, and integrated digital health records.`,
    bioVi: `TS. BS. Nguyễn Hữu Thiên là Giám đốc Y khoa tại Bệnh viện Đa khoa Quốc tế Vinmec Đà Nẵng, phụ trách chỉ đạo chuyên môn lâm sàng theo tiêu chuẩn kiểm định quốc tế JCI, hội đồng hội chẩn đa chuyên khoa và ứng dụng bệnh án điện tử tích hợp.`
  },

  // 8. Dr. Vuong Quoc Duy
  {
    id: "dr-vuong-quoc-duy",
    name: "Dr. Vuong Quoc Duy (TBC)",
    category: "hospital",
    categoryLabelEn: "Hospital Executives",
    categoryLabelVi: "Lãnh đạo Bệnh viện",
    photo: "",
    roleEn: "Head of Telemedicine & IT",
    roleVi: "Trưởng ban Y tế Từ xa & CNTT",
    orgEn: "Vinmec Healthcare System",
    orgVi: "Hệ thống Y tế Vinmec",
    sessionEn: "Public-Private Collaboration & Digital Innovation in Vietnam's Health Sector",
    sessionVi: "Hợp tác Công - Tư & Đổi mới Số hóa trong Ngành Y tế Việt Nam",
    badges: ["💻 Health Informatics", "🌐 National Telemedicine Network"],
    badgesVi: ["💻 Tin học Y tế", "🌐 Mạng lưới Telemedicine Quốc gia"],
    bioEn: `Dr. Vuong Quoc Duy directs health informatics and telemedicine implementations across the nationwide Vinmec healthcare network, focusing on remote specialist consultations, PACS imaging cloud, and AI diagnostics.`,
    bioVi: `TS. BS. Vương Quốc Duy phụ trách công nghệ thông tin y tế và telemedicine trên toàn hệ thống Vinmec, tập trung vào giải pháp khám chữa bệnh từ xa, lưu trữ và truyền hình ảnh y khoa PACS điện toán đám mây và chẩn đoán hỗ trợ bởi AI.`
  },

  // 9. Dr Rafi Kot
  {
    id: "dr-rafi-kot",
    name: "Dr. Rafi Kot (TBC)",
    category: "hospital",
    categoryLabelEn: "Primary Care & Clinic Leadership",
    categoryLabelVi: "Y tế Cơ sở & Chuỗi Phòng khám",
    photo: "",
    roleEn: "Founder and Medical Director",
    roleVi: "Nhà sáng lập & Giám đốc Y khoa",
    orgEn: "Family Medical Practice Vietnam",
    orgVi: "Phòng khám Gia đình Family Medical Practice (FMP)",
    sessionEn: "Integrating Public and Private Care: Sustainable Primary Health Models in Vietnam",
    sessionVi: "Kết hợp Y tế Công - Tư: Xây dựng Mô hình Y tế Cơ sở Bền vững tại Việt Nam",
    badges: ["🏥 Founder FMP Vietnam", "🚑 Pioneer *9999 Emergency Network"],
    badgesVi: ["🏥 Sáng lập FMP Việt Nam", "🚑 Tiên phong Mạng lưới Cấp cứu *9999"],
    bioEn: `Dr. Rafi Kot is the visionary Founder and Medical Director of Family Medical Practice (FMP) and the EMR *9999 ambulance emergency network. Operating in Vietnam for over three decades, Dr. Kot has shaped high-end private outpatient care and international emergency evacuation services across Vietnam.`,
    bioVi: `Bác sĩ Rafi Kot là Nhà sáng lập và Giám đốc Y khoa của Phòng khám Đa khoa Gia đình (Family Medical Practice - FMP) cùng mạng lưới cấp cứu tiêu chuẩn quốc tế EMR *9999. Với hơn 30 năm gắn bó tại Việt Nam, ông đã định hình chuẩn mực điều trị ngoại trú cao cấp và dịch vụ cứu trợ y tế khẩn cấp xuyên biên giới.`
  },

  // 10. Dr. Nguyen Van Anh
  {
    id: "dr-nguyen-van-anh",
    name: "Dr. Nguyen Van Anh (TBC)",
    category: "hospital",
    categoryLabelEn: "Primary Care & Clinic Leadership",
    categoryLabelVi: "Y tế Cơ sở & Chuỗi Phòng khám",
    photo: "",
    roleEn: "Director",
    roleVi: "Giám đốc Phòng khám",
    orgEn: "Pasteur General Clinic (Danang)",
    orgVi: "Phòng khám Đa khoa Pasteur Đà Nẵng",
    sessionEn: "Scaling Quality Care: Private Sector Innovations at Pasteur General Clinic",
    sessionVi: "Mở rộng Chăm sóc Chất lượng: Đổi mới Khu vực Tư nhân tại Phòng khám Pasteur",
    badges: ["🏥 Private Outpatient Clinic", "🔬 Preventative Screening Hub"],
    badgesVi: ["🏥 Phòng khám Đa khoa Tư nhân", "🔬 Trung tâm Tầm soát Dự phòng"],
    bioEn: `Dr. Nguyen Van Anh is the Director of Pasteur General Clinic in Danang, leading modern outpatient diagnostics, high-throughput lab automation, and community health screening in Central Vietnam.`,
    bioVi: `ThS. BS. Nguyễn Văn Anh là Giám đốc Phòng khám Đa khoa Pasteur Đà Nẵng, đơn vị y tế tư nhân đa khoa quy mô lớn tại miền Trung với thế mạnh về chẩn đoán ngoại trú, xét nghiệm tự động hóa và tầm soát sức khỏe cộng đồng.`
  },

  // 11. Mr. Le Trung Chinh
  {
    id: "mr-le-trung-chinh",
    name: "Mr. Le Trung Chinh",
    category: "keynote",
    categoryLabelEn: "Municipal Government & Vision",
    categoryLabelVi: "Chính quyền Đô thị & Tầm nhìn",
    photo: "",
    roleEn: "Chairman",
    roleVi: "Chủ tịch",
    orgEn: "People's Committee of Danang City",
    orgVi: "Ủy ban Nhân dân Thành phố Đà Nẵng",
    sessionEn: "Danang's Vision: Building a Smart, Healthy, and Inclusive City for the Future",
    sessionVi: "Tầm nhìn Đà Nẵng: Xây dựng Đô thị Thông minh, Y tế Chất lượng & Toàn diện",
    badges: ["🏛️ Danang City Leadership", "🌟 Smart City Champion"],
    badgesVi: ["🏛️ Lãnh đạo Thành phố Đà Nẵng", "🌟 Tiên phong Đô thị Thông minh"],
    bioEn: `Mr. Le Trung Chinh is the Chairman of the People's Committee of Danang City, steering Danang's roadmap into an international innovation, technology, high-end healthcare, and eco-tourism hub.`,
    bioVi: `Ông Lê Trung Chinh là Chủ tịch Ủy ban Nhân dân Thành phố Đà Nẵng, người trực tiếp chỉ đạo chiến lược đưa Đà Nẵng trở thành trung tâm kinh tế - xã hội lớn của miền Trung, trung tâm y tế chuyên sâu và đô thị sinh thái thông minh của Việt Nam.`
  },

  // 12. Dr Nabrees Sinnalebbe
  {
    id: "dr-nabrees-sinnalebbe",
    name: "Dr. Nabrees Sinnalebbe",
    category: "chairs",
    categoryLabelEn: "Australian Faculty Chairs",
    categoryLabelVi: "Hội đồng Chuyên môn Úc",
    photo: "",
    roleEn: "Clinical Director & Physician",
    roleVi: "Giám đốc Lâm sàng & Bác sĩ Điều trị",
    orgEn: "Mildura Base Public Hospital, NSW",
    orgVi: "Bệnh viện Công Mildura Base (NSW, Úc)",
    sessionEn: "Panel Chair: Universal Care Implementation & Frontline Hospital Triage",
    sessionVi: "Chủ tọa Tọa đàm: Thực thi Chăm sóc Toàn dân & Phân luồng Cấp cứu Bệnh viện",
    badges: ["🇦🇺 Australian Public Health", "🏥 Hospital Operations Lead"],
    badgesVi: ["🇦🇺 Y tế Công lập Úc", "🏥 Quản trị Vận hành Bệnh viện"],
    bioEn: `Dr. Nabrees Sinnalebbe is an experienced Australian medical director at Mildura Base Public Hospital, specializing in inpatient flow, emergency triage, and comparative hospital management.`,
    bioVi: `Bác sĩ Nabrees Sinnalebbe là giám đốc lâm sàng tại Bệnh viện Công Mildura Base (Úc), chuyên sâu về điều phối luồng bệnh nhân nội trú, cấp cứu và so sánh mô hình quản trị bệnh viện công lập quốc tế.`
  },

  // 13. Dr Neel Gobin
  {
    id: "dr-neel-gobin",
    name: "Dr. Neel Gobin",
    category: "chairs",
    categoryLabelEn: "Australian Faculty Chairs",
    categoryLabelVi: "Hội đồng Chuyên môn Úc",
    photo: "",
    roleEn: "Medical Educator & Physician",
    roleVi: "Chuyên gia Đào tạo Y khoa & Bác sĩ Lâm sàng",
    orgEn: "Hunter New England Health, Australia",
    orgVi: "Mạng lưới Y tế Hunter New England (Úc)",
    sessionEn: "Panel Chair: Telemedicine Innovations & Remote Health Delivery",
    sessionVi: "Chủ tọa Tọa đàm: Đổi mới Telemedicine & Khám chữa bệnh Từ xa",
    badges: ["🇦🇺 Australian Health Tech", "🎓 Medical Education Chair"],
    badgesVi: ["🇦🇺 Công nghệ Y tế Úc", "🎓 Chủ tọa Đào tạo Y khoa"],
    bioEn: `Dr. Neel Gobin is a clinician and medical educator with Hunter New England Health, focusing on decentralized digital health delivery, clinical governance, and remote health technology.`,
    bioVi: `Bác sĩ Neel Gobin là bác sĩ lâm sàng và chuyên gia đào tạo thuộc Hunter New England Health, tập trung vào mô hình chăm sóc sức khỏe số phân tán, quản trị lâm sàng và công nghệ y tế từ xa.`
  },

  // 14. Dr Siobhain Brennan
  {
    id: "dr-siobhain-brennan",
    name: "Dr. Siobhain Brennan",
    category: "chairs",
    categoryLabelEn: "Australian Faculty Chairs",
    categoryLabelVi: "Hội đồng Chuyên môn Úc",
    photo: "",
    roleEn: "General Practitioner & Practice Owner",
    roleVi: "Bác sĩ Gia đình & Chủ Phòng khám",
    orgEn: "Western Australia Medical Services",
    orgVi: "Hệ thống Y tế Tư nhân Tây Úc",
    sessionEn: "Panel Chair: Private Clinic Business Models & Primary Care Sustainability",
    sessionVi: "Chủ tọa Tọa đàm: Mô hình Kinh doanh Phòng khám Tư & Bền vững Y tế Cơ sở",
    badges: ["🇦🇺 General Practice Leadership", "💼 Medical Business Owner"],
    badgesVi: ["🇦🇺 Lãnh đạo Y tế Gia đình", "💼 Quản trị Kinh doanh Phòng khám"],
    bioEn: `Dr. Siobhain Brennan is a distinguished Australian General Practitioner and clinic owner, providing authoritative insights into medical practice economics, Medicare compliance, and team delegation.`,
    bioVi: `Bác sĩ Siobhain Brennan là bác sĩ gia đình và chủ phòng khám uy tín tại Tây Úc, chuyên sâu về kinh tế phòng khám, quy chuẩn thanh toán bảo hiểm và phân quyền lâm sàng hiệu quả.`
  },

  // 15. Dr Anand Ponniraivan
  {
    id: "dr-anand-ponniraivan",
    name: "Dr. Anand Ponniraivan",
    category: "chairs",
    categoryLabelEn: "Australian Delegation Leads",
    categoryLabelVi: "Trưởng đoàn Khảo sát Úc",
    photo: "",
    roleEn: "ADBA Delegation Lead & Clinical Advisor",
    roleVi: "Trưởng đoàn Khảo sát ADBA & Cố vấn Lâm sàng",
    orgEn: "Australian Doctors Business Academy",
    orgVi: "Viện Kinh doanh Y khoa Úc (ADBA)",
    sessionEn: "Site Visit Lead: Da Nang General Hospital Guided Clinical Tour",
    sessionVi: "Dẫn đoàn Khảo sát: Tham quan Thực tế Lâm sàng Bệnh viện Đà Nẵng",
    badges: ["🇦🇺 ADBA Delegation Lead", "🩺 Clinical Exchange"],
    badgesVi: ["🇦🇺 Trưởng đoàn Khảo sát ADBA", "🩺 Giao lưu Lâm sàng"],
    bioEn: `Dr. Anand Ponniraivan coordinates the clinical site tours and peer discussions at Da Nang Hospital, facilitating structured doctor-to-doctor dialogue on trauma and public insurance flows.`,
    bioVi: `Bác sĩ Anand Ponniraivan chịu trách nhiệm điều phối chuyến khảo sát thực tế và các phiên thảo luận chuyên môn tại Bệnh viện Đà Nẵng, kết nối đối thoại trực tiếp giữa bác sĩ Úc và lãnh đạo các chuyên khoa.`
  },

  // 16. Dr Jemma Hogan
  {
    id: "dr-jemma-hogan",
    name: "Dr. Jemma Hogan",
    category: "chairs",
    categoryLabelEn: "Australian Delegation Leads",
    categoryLabelVi: "Trưởng đoàn Khảo sát Úc",
    photo: "",
    roleEn: "ADBA Delegation Lead & Health Strategist",
    roleVi: "Trưởng đoàn Khảo sát ADBA & Chuyên gia Chiến lược",
    orgEn: "Australian Doctors Business Academy",
    orgVi: "Viện Kinh doanh Y khoa Úc (ADBA)",
    sessionEn: "Site Visit Lead: Vinmec Advanced Medical Technology Center",
    sessionVi: "Dẫn đoàn Khảo sát: Trung tâm Công nghệ Y khoa Tiên tiến Vinmec",
    badges: ["🇦🇺 ADBA Delegation Lead", "🔬 Health Tech Adoption"],
    badgesVi: ["🇦🇺 Trưởng đoàn Khảo sát ADBA", "🔬 Ứng dụng Công nghệ Y tế"],
    bioEn: `Dr. Jemma Hogan coordinates the digital innovation site visit at Vinmec International Hospital, moderating the concluding capstone workshop on translating study tour lessons back to Australian medical practice.`,
    bioVi: `Bác sĩ Jemma Hogan phụ trách điều phối chuyến khảo sát đổi mới công nghệ y tế tại Bệnh viện Quốc tế Vinmec và chủ trì hội thảo tổng kết đúc kết bài học ứng dụng vào thực tế y khoa tại Úc.`
  }
];
