/**
 * Australian Doctors Business Academy (ADBA)
 * Vietnam International Study Tour 2026 — Official Speakers Dataset (Bilingual EN/VI)
 * Sourced directly from: https://doctorsbusinessacademy.com.au/event/vietnam-international-study-tour-2026/
 */

const SPEAKERS_DATA = [
  // 1. Dr. Melvin Heng
  {
    id: "dr-melvin-heng",
    name: "Dr. Melvin Heng",
    category: "executive",
    categoryLabelEn: "ADBA Faculty & Healthcare Executive",
    categoryLabelVi: "Ban Giảng huấn ADBA & Lãnh đạo Y tế",
    photo: "assets/images/speakers/dr-melvin-heng.jpg?v=20261021_2238",
    roleEn: "Executive Director & Group Chief Executive Officer",
    roleVi: "Giám đốc Điều hành & Tổng Giám đốc Tập đoàn",
    orgEn: "Thomson Medical Group",
    orgVi: "Tập đoàn Y tế Thomson Medical Group",
    badges: ["🏥 Group CEO Thomson Medical", "💼 MedTech Investor & Board Advisor", "🏅 Singapore Public Service Medal 2023"],
    badgesVi: ["🏥 Tổng Giám đốc Thomson Medical Group", "💼 Cố vấn & Nhà đầu tư MedTech", "🏅 Huân chương Dịch vụ Công Singapore 2023"],
    bioEn: `Dr Melvin Heng is a physician and healthcare executive with over 15 years of experience in hospital management, primary and specialist clinics, teleradiology, MedTech, and aeromedical evacuations. He was appointed Executive Director and Group Chief Executive Officer of Thomson Medical Group on 1 December 2022, leading the Group's overall strategic direction, business operations, and regional expansion across Southeast Asia.

He currently serves as Non-Independent and Non-Executive Director of TMC Life Sciences Berhad. Dr Heng has invested in several pioneering MedTech enterprises, including Mesh Bio and Global Health Byte (now UNO Technologies). From 2016 to 2018, he served as an advisor to the Ministry of Health Singapore on the Primary Care IT sub-committee for National Electronic Health Records and GP Connect.

Prior to joining Thomson Medical, Dr Heng held executive leadership roles at Gleneagles Hospital, including Chief Executive Officer and Chief Operating Officer. From 2009 to 2015, he practiced as a medical doctor with the National Health Service (UK) and Tan Tock Seng Hospital in Singapore. Following his public service tenure, he co-founded aeromedical evacuation firm Global Medical Concierge and was an equity partner at OneCare Medical, an extensive chain of primary care clinics.

Dr Heng was awarded the Public Service Medal (COVID-19) by the Singapore Government in 2023. He graduated from St George's Hospital Medical School in London with an MBBS, holds an MBA from the Frankfurt School of Finance and Management, and earned a Graduate Diploma in Occupational Medicine (GDOM) from the National University of Singapore (NUS).`,
    bioVi: `Bác sĩ Melvin Heng là bác sĩ lâm sàng và nhà điều hành y tế kỳ cựu với hơn 15 năm kinh nghiệm về quản trị bệnh viện, mạng lưới phòng khám đa khoa - chuyên khoa, chẩn đoán hình ảnh từ xa (teleradiology), công nghệ y tế (MedTech) và vận chuyển cấp cứu y tế hàng không. Ông được bổ nhiệm làm Giám đốc Điều hành và Tổng Giám đốc Tập đoàn Thomson Medical Group vào ngày 1 tháng 12 năm 2022, trực tiếp định hình chiến lược tăng trưởng và phát triển kinh doanh của Tập đoàn tại khu vực Đông Nam Á.

Hiện tại, ông là Thành viên Hội đồng Quản trị của TMC Life Sciences Berhad. TS. BS. Heng là nhà đầu tư chiến lược vào các doanh nghiệp MedTech tiên phong như Mesh Bio và UNO Technologies. Giai đoạn 2016 - 2018, ông là Cố vấn cho Bộ Y tế Singapore thuộc Tiểu ban Công nghệ Thông tin Y tế Cơ sở về Dự án Bệnh án Điện tử Quốc gia (NEHR) và GP Connect.

Trước khi gia nhập Thomson Medical, ông từng đảm nhiệm các chức vụ lãnh đạo cấp cao tại Bệnh viện Gleneagles (Singapore), bao gồm Tổng Giám đốc (CEO) và Giám đốc Vận hành (COO). Giai đoạn 2009 - 2015, ông công tác với vai trò bác sĩ lâm sàng tại Cơ quan Y tế Quốc gia Anh (NHS) và Bệnh viện Tan Tock Seng (Singapore). Sau đó, ông đồng sáng lập công ty cấp cứu y tế hàng không Global Medical Concierge và là đối tác sở hữu của chuỗi phòng khám y tế ban đầu OneCare Medical.

Bác sĩ Melvin Heng được Chính phủ Singapore trao tặng Huân chương Dịch vụ Công (COVID-19) năm 2023. Ông tốt nghiệp Cử nhân Y khoa & Phẫu thuật (MBBS) tại Trường Y Bệnh viện St George (London), sở hữu bằng Thạc sĩ Quản trị Kinh doanh (MBA) từ Trường Tài chính & Quản lý Frankfurt (Đức) và Chứng chỉ Sau đại học về Y học Lao động (GDOM) từ Đại học Quốc gia Singapore (NUS).`
  },

  // 2. Dr. Jemma Hogan
  {
    id: "dr-jemma-hogan",
    name: "Dr. Jemma Hogan",
    category: "executive",
    categoryLabelEn: "ADBA Faculty & Medical Administration",
    categoryLabelVi: "Ban Giảng huấn ADBA & Quản trị Y tế",
    photo: "assets/images/speakers/dr-jemma-hogan.jpg?v=20261021_2238",
    roleEn: "General Manager for Medical Workforce & Education | Director of Medical Services",
    roleVi: "Tổng Quản lý Nhân lực & Đào tạo Y khoa | Giám đốc Y khoa",
    orgEn: "St John of God Health Care | St John of God Mt Lawley Hospital",
    orgVi: "Hệ thống Y tế St John of God Health Care | BV Mt Lawley",
    badges: ["🩺 RACMA & RACP Specialist", "🎓 Adjunct Clinical Lecturer Curtin University", "📚 Dual MHM / MPH (UNSW)"],
    badgesVi: ["🩺 Chuyên gia RACMA & RACP", "🎓 Giảng viên Lâm sàng ĐH Curtin", "📚 Thạc sĩ Quản trị Y tế & Y tế Công cộng UNSW"],
    bioEn: `Dr Jemma Hogan is a specialist medical practitioner dual-trained in medical administration (RACMA) and paediatric medicine (RACP). She currently serves as General Manager for Medical Workforce and Education at St John of God Health Care and Director of Medical Services at St John of God Mt Lawley Hospital, while maintaining active clinical practice as a Paediatric Advanced Trainee.

Dr Hogan previously served as Medical Administration Registrar at St John of God Midland Public and Private Hospitals, Advanced Trainee in General Paediatrics at Bunbury Regional Hospital, and Public Health Registrar leading statewide COVID-19 response operations with the Western Australia Department of Health.

She is an Adjunct Clinical Lecturer at Curtin University, delivering lectures on paediatric clinical management and facilitating clinical skills sessions for medical students. In 2019, she completed a dual Master of Health Management and Master of Public Health (with Excellence) through the University of New South Wales (UNSW). Dr Hogan holds specialized academic and professional interests in clinical leadership development, physician wellbeing, medical pedagogy, and health workforce capacity modeling.`,
    bioVi: `Bác sĩ Jemma Hogan là bác sĩ chuyên khoa được đào tạo song song trong cả hai lĩnh vực: Quản trị Y tế (RACMA) và Chuyên khoa Nhi (RACP). Hiện bà giữ vai trò Tổng Quản lý Nhân lực và Đào tạo Y khoa tại Hệ thống Y tế St John of God Health Care, đồng thời là Giám đốc Y khoa (Director of Medical Services) tại Bệnh viện St John of God Mt Lawley, song song duy trì công tác điều trị lâm sàng với vai trò Bác sĩ Đào tạo Chuyên sâu Nhi khoa.

Trước đó, TS. BS. Hogan từng công tác với cương vị Bác sĩ Nội trú Quản trị Y tế tại Tổ hợp Bệnh viện Công - Tư St John of God Midland, Bác sĩ Đào tạo Chuyên sâu Nhi khoa tại Bệnh viện Đa khoa Khu vực Bunbury, và Bác sĩ Y tế Công cộng tham gia chỉ huy chiến dịch phòng chống dịch COVID-19 toàn bang tại Cơ quan Y tế Tây Úc (WA Department of Health).

Bà hiện là Giảng viên Lâm sàng Thỉnh giảng tại Đại học Curtin, tham gia giảng dạy chuyên ngành Nhi khoa và hướng dẫn kỹ năng lâm sàng cho sinh viên y khoa. Năm 2019, bà hoàn thành xuất sắc chương trình Thạc sĩ kép Quản trị Y tế và Y tế Công cộng (MHM/MPH with Excellence) tại Đại học New South Wales (UNSW). Lĩnh vực nghiên cứu chuyên sâu của bà bao gồm phát triển năng lực lãnh đạo y khoa, chăm sóc sức khỏe tinh thần cho bác sĩ và hoạch định nhân lực y tế chiến lược.`
  },

  // 3. Dr Siobhain Brennan
  {
    id: "dr-siobhain-brennan",
    name: "Dr. Siobhain Brennan",
    category: "primary-care",
    categoryLabelEn: "ADBA Faculty & Primary Care Systems",
    categoryLabelVi: "Ban Giảng huấn ADBA & Y tế Cơ sở",
    photo: "assets/images/speakers/dr-siobhain-brennan.jpg?v=20261021_2238",
    roleEn: "Specialist General Practitioner & Director of GP Liaison",
    roleVi: "Bác sĩ Chuyên khoa Đa khoa & Giám đốc Kết nối Bác sĩ Gia đình",
    orgEn: "St John of God Midland Public & Private Hospitals | Curtin University",
    orgVi: "Bệnh viện Công - Tư St John of God Midland | Đại học Curtin",
    badges: ["🩺 Specialist GP (FRACGP)", "🏛️ Director of GP Liaison", "🎓 PhD & Adjunct Senior Lecturer"],
    badgesVi: ["🩺 Bác sĩ Chuyên khoa GP (FRACGP)", "🏛️ Giám đốc Kết nối Bác sĩ Gia đình", "🎓 Tiến sĩ & Giảng viên Cao cấp"],
    bioEn: `Dr Siobhain Brennan (BSc, PhD, MBBS, DCH, FRACGP, GAICD) is a specialist General Practitioner (RACGP) practicing clinically in outer metropolitan Perth and serving as Casual GP Senior Clinical Practitioner in the Emergency Department at St John of God Midland. She concurrently holds the position of Director of GP Liaison at St John of God Midland Public and Private Hospitals.

Dr Brennan previously worked across prominent community health organisations including Silverchain and Moorditj Koort, delivering primary care directly to homes, schools, and vulnerable populations. Prior to embarking on medical clinical training in 2008, she earned her PhD at the University of Western Australia (1999) and led biomedical research in cystic fibrosis, authoring over 30 peer-reviewed scientific publications.

In her director liaison role, Dr Brennan bridges complex hospital and community interfaces, curating postgraduate education programs for community physicians and representing GP perspectives across multiple Australian state health steering committees. She is an Adjunct Senior Lecturer at Curtin University, a board director for GP training organization WAGPET, and a Graduate of the Australian Institute of Company Directors (GAICD).`,
    bioVi: `Bác sĩ Siobhain Brennan (BSc, PhD, MBBS, DCH, FRACGP, GAICD) là Bác sĩ Chuyên khoa Y học Gia đình (RACGP), hiện đang thực hành lâm sàng tại khu vực Perth và đảm nhiệm vai trò Bác sĩ Đa khoa Cao cấp tại Khoa Cấp cứu Bệnh viện St John of God Midland. Đồng thời, bà là Giám đốc Kết nối Bác sĩ Gia đình (Director of GP Liaison) tại Tổ hợp Bệnh viện Công - Tư St John of God Midland.

Bác sĩ Brennan từng công tác tại các tổ chức chăm sóc sức khỏe cộng đồng lớn như Silverchain và Moorditj Koort, trực tiếp cung cấp dịch vụ y tế ban đầu tới hộ gia đình và trường học. Trước khi bắt đầu chương trình bác sĩ y khoa năm 2008, bà đã hoàn thành học vị Tiến sĩ (PhD) tại Đại học Tây Úc (UWA) năm 1999, phụ trách nhóm nghiên cứu về bệnh xơ nang và là tác giả của hơn 30 công trình nghiên cứu y sinh học quốc tế.

Với cương vị Giám đốc Kết nối GP, bà đóng vai trò then chốt kết nối hệ thống bệnh viện chuyên sâu với mạng lưới bác sĩ gia đình cộng đồng, xây dựng các chương trình đào tạo y khoa liên tục chất lượng cao và đại diện cho giới y bác sĩ ban đầu trong các ủy ban hoạch định y tế bang. Bà là Giảng viên Cao cấp Thỉnh giảng tại Đại học Curtin, Thành viên Hội đồng Quản trị WAGPET và tốt nghiệp Viện Thành viên Hội đồng Quản trị Úc (GAICD).`
  },

  // 4. Dr Neel Gobin
  {
    id: "dr-neel-gobin",
    name: "Dr. Neel Gobin",
    category: "executive",
    categoryLabelEn: "ADBA Faculty & Regional Governance",
    categoryLabelVi: "Ban Giảng huấn ADBA & Quản trị Khu vực",
    photo: "assets/images/speakers/dr-neel-gobin.jpg?v=20261021_2238",
    roleEn: "Regional Director of Medical Services",
    roleVi: "Giám đốc Y tế Khu vực",
    orgEn: "Belmont Hospital & Hunter Valley Sector Healthcare Facilities",
    orgVi: "Bệnh viện Belmont & Khu vực Y tế Hunter Valley (Úc)",
    badges: ["🏥 Regional Director of Medical Services", "🛡️ Clinical Governance & Workforce Oversight", "📋 ACHSM Associate Fellow & HETI Surveyor"],
    badgesVi: ["🏥 Giám đốc Y tế Khu vực", "🛡️ Giám sát Quản trị Lâm sàng & Nhân lực", "📋 Thành viên ACHSM & Đánh giá viên HETI"],
    bioEn: `Dr Neel Gobin is a senior medical executive responsible for providing authoritative medical direction into strategic, operational, and executive decision-making across major metropolitan and regional healthcare facilities in New South Wales. He sits on Belmont Hospital's Executive Committee and plays an integral role in the leadership team for the Hunter Valley Sector, overseeing clinical governance and medical workforce development spanning junior resident medical officers through to senior staff specialists.

Prior to his appointment as Regional Director of Medical Services, Dr Gobin practiced clinically for eight years and held several senior medical administrative roles, notably serving as District Medical Lead for COVID-19 Vaccination Operations across Southern NSW.

He is an Associate Fellow of the Australasian College of Health Service Management (ACHSM) and serves as an official Hospital Surveyor with the Health Education and Training Institute (HETI), auditing clinical training programs and hospital governance structures against rigorous national standards.`,
    bioVi: `Bác sĩ Neel Gobin là chuyên gia quản trị y tế cấp cao, chịu trách nhiệm cố vấn chuyên môn y khoa cho các quyết định chiến lược, vận hành và quản trị điều hành tại mạng lưới cơ sở y tế đô thị và khu vực thuộc bang New South Wales (Úc). Ông là thành viên Ban Điều hành Bệnh viện Belmont và là nhân sự nòng cốt trong ban lãnh đạo Ngành Y tế Phân khu Hunter Valley, trực tiếp quản lý hệ thống quản trị lâm sàng và phát triển đội ngũ nhân lực bác sĩ từ nội trú đến các chuyên gia đầu ngành.

Trước khi đảm nhiệm cương vị Giám đốc Y tế Khu vực, TS. BS. Gobin đã có 8 năm kinh nghiệm thực hành lâm sàng thực tế và từng nắm giữ nhiều vị trí lãnh đạo chuyên môn, tiêu biểu là Trưởng ban Chỉ đạo Y tế Chiến dịch Tiêm chủng COVID-19 toàn khu vực Nam NSW.

Ông là Thành viên Liên kết của Trường Quản trị Dịch vụ Y tế Australasia (ACHSM) và là Đánh giá viên Bệnh viện chính thức của Viện Đào tạo & Giáo dục Y tế (HETI), chuyên trách kiểm định chất lượng các chương trình đào tạo bác sĩ và mô hình quản trị lâm sàng chuẩn quốc gia.`
  },

  // 5. Dr Nabrees Sinnalebbe
  {
    id: "dr-nabrees-sinnalebbe",
    name: "Dr. Nabrees Sinnalebbe",
    category: "executive",
    categoryLabelEn: "ADBA Faculty & Health Equity",
    categoryLabelVi: "Ban Giảng huấn ADBA & Công bằng Y tế",
    photo: "assets/images/speakers/dr-nabrees-sinnalebbe.jpg?v=20261021_2238",
    roleEn: "Executive Director of Medical Services & Chief Medical Officer",
    roleVi: "Giám đốc Điều hành Dịch vụ Y tế & Giám đốc Y khoa (CMO)",
    orgEn: "Mildura Base Public Hospital (MBPH)",
    orgVi: "Bệnh viện Công lập Mildura Base (MBPH)",
    badges: ["🩺 Specialist Medical Administrator (FRACMA, FACHSM)", "🏆 2026 Gold Stevie Award Healthcare Innovation", "🌟 Zero-Vacancy Rural Medical Workforce Pioneer"],
    badgesVi: ["🩺 Chuyên gia Quản trị Y tế (FRACMA, FACHSM)", "🏆 Giải Vàng Stevie Châu Á - TBD 2026", "🌟 Tiên phong Giải pháp Nhân lực Y tế Nông thôn"],
    bioEn: `Dr Nabrees Sinnalebbe (FRACMA, FACHSM) is a Specialist Medical Administrator and Chief Medical Officer whose philosophy centers on healthcare equity: that geography should never determine the quality of care an individual receives. As Executive Director of Medical Services and CMO at Mildura Base Public Hospital (MBPH) — a major tertiary teaching hospital serving over 80,000 residents across Victoria, New South Wales, and South Australia — Dr Sinnalebbe has pioneered transformative health system solutions.

Faced with a 40% junior doctor shortage in regional Victoria, Dr Sinnalebbe engineered an integrated International Medical Graduate pathway integrating workplace assessment and comprehensive doctor retention models. Within 30 months, doctor vacancies fell to zero, reliance on locum doctors dropped by 96%, and doctor tenure tripled — earning him the 2026 Gold Stevie Asia Pacific Award for Innovative Management in Health Care Industries.

He developed Victoria's largest Rural Generalist training model, established end-to-end medical training pipelines, and implemented the Victorian Single Employer Model to strengthen regional clinical retention. Dr Sinnalebbe serves on the Human Research Ethics Committee (HREC), Chairs the Victorian Rural Generalist Program for the Loddon Mallee Region, and serves as an accreditation site surveyor for the Postgraduate Medical Council of Victoria.`,
    bioVi: `Bác sĩ Nabrees Sinnalebbe (FRACMA, FACHSM) là Chuyên gia Quản trị Y tế và Giám đốc Y khoa (CMO) với triết lý kiên định về sự công bằng trong y tế: khoảng cách địa lý không bao giờ được là rào cản hạn chế chất lượng chăm sóc sức khỏe. Trên cương vị Giám đốc Điều hành Dịch vụ Y tế & CMO tại Bệnh viện Công lập Mildura Base (MBPH) — bệnh viện đại học tuyến cuối phục vụ hơn 80.000 người dân vùng giáp ranh 3 bang Victoria, New South Wales và Nam Úc — ông đã kiến tạo những giải pháp thay đổi hệ thống mang tính bước ngoặt.

Đối mặt với tỷ lệ thiếu hụt bác sĩ trẻ lên đến 40% tại địa phương, Bác sĩ Sinnalebbe đã xây dựng chiến lược đột phá thu hút Bác sĩ Tốt nghiệp Quốc tế (IMG) kết hợp quy trình đánh giá tại nơi làm việc và chính sách giữ chân nhân tài toàn diện. Chỉ sau 30 tháng, tỷ lệ khuyết vị trí giảm về 0%, mức phụ thuộc vào bác sĩ thời vụ giảm 96% và thời gian gắn bó của bác sĩ tăng gấp ba lần. Đề án này đã giúp ông đạt Giải Vàng Stevie Châu Á - Thái Bình Dương 2026 về Quản trị Đổi mới trong Ngành Y tế.

Bên cạnh đó, ông là người tiên phong thiết lập mô hình đào tạo Bác sĩ Đa khoa Nông thôn lớn nhất bang Victoria. Ông hiện là Chủ tịch Chương trình Bác sĩ Đa khoa Nông thôn Vùng Loddon Mallee, thành viên Ủy ban Đạo đức Nghiên cứu Con người (HREC) và Đánh giá viên Thẩm định của Hội đồng Y khoa Sau đại học Bang Victoria.`
  },

  // 6. Dr Gershu Chandy Paul
  {
    id: "dr-gershu-chandy-paul",
    name: "Dr. Gershu Chandy Paul",
    category: "hospital",
    categoryLabelEn: "ADBA Faculty & International Hospitals",
    categoryLabelVi: "Ban Giảng huấn ADBA & Y tế Quốc tế",
    photo: "assets/images/speakers/dr-gershu-chandy-paul.jpeg?v=20261021_2238",
    roleEn: "Emeritus Chair, YOPHH Healthcare Council | International Healthcare Executive",
    roleVi: "Chủ tịch Danh dự Hội đồng Y tế YOPHH | Chuyên gia Điều hành Y tế Quốc tế",
    orgEn: "Pun Hlaing Hospitals Group | Former Group CEO Siloam Hospitals",
    orgVi: "Tập đoàn BV Pun Hlaing | Nguyên Tổng Giám đốc Siloam Hospitals",
    badges: ["🌐 4 Decades International Hospital Leadership", "📈 Scaled Siloam Hospitals to 33 Facilities ($1.8B IPO)", "🏥 JCI Accreditation Pioneer in SE Asia"],
    badgesVi: ["🌐 4 Thập kỷ Lãnh đạo Bệnh viện Quốc tế", "📈 Mở rộng Hệ thống Siloam 33 BV (IPO 1,8 tỷ USD)", "🏥 Tiên phong Đạt chuẩn JCI tại Đông Nam Á"],
    bioEn: `Dr Gershu Chandy Paul (MBBS, MBA, FRACMA, FCHSM, CHE) is an internationally renowned healthcare executive with four decades of leadership across Sri Lanka, New Zealand, Australia, Indonesia, Myanmar, and Singapore. His expertise spans health system planning, population-based funding, hospital turnaround, and international clinical accreditation.

A New Zealand citizen of Sri Lankan origin, Dr Paul began his executive career at Southland District Health Board (New Zealand), rising from Business Analyst in 1996 to Chief Executive Officer in 2001, where he delivered a 250-bed tertiary hospital within a US$100 million budget.

As Group CEO and President Director of Siloam Hospitals in Indonesia (2006–2016), Dr Paul spearheaded unprecedented growth, expanding the network from 4 to 33 hospitals with revenues exceeding US$500 million, taking Siloam public on the Jakarta Stock Exchange at a US$1.8 billion valuation and securing Indonesia's first JCI accreditation. In Myanmar, he led the turnaround of Pun Hlaing Hospitals Group (2014–2024), achieving profitability in 18 months and opening Myanmar's first JCI hospital. Most recently as CEO of O2 Healthcare Group Singapore (2023–2025), he drove revenue growth of over 60%.`,
    bioVi: `Bác sĩ Gershu Chandy Paul (MBBS, MBA, FRACMA, FCHSM, CHE) là nhà điều hành y tế danh tiếng quốc tế với 4 thập kỷ kinh nghiệm lãnh đạo trên khắp Sri Lanka, New Zealand, Úc, Indonesia, Myanmar và Singapore. Năng lực chuyên môn của ông bao gồm quy hoạch hệ thống y tế, mô hình tài chính y tế dựa trên dân số, tái cấu trúc bệnh viện và kiểm định chất lượng y tế chuẩn quốc tế.

Là công dân New Zealand gốc Sri Lanka, ông bắt đầu sự nghiệp quản trị tại Hội đồng Y tế Khu vực Southland (New Zealand), từ Chuyên viên Phân tích (1996) thăng tiến lên Tổng Giám đốc Điều hành (2001), chỉ đạo hoàn thiện bệnh viện tuyến cuối 250 giường với ngân sách 100 triệu USD đúng hạn.

Trên cương vị Tổng Giám đốc Tập đoàn và Chủ tịch Siloam Hospitals (Indonesia) từ 2006 - 2016, TS. BS. Gershu Paul đã tạo nên bước nhảy vọt thần kỳ khi mở rộng mạng lưới từ 4 lên 33 bệnh viện, doanh thu vượt 500 triệu USD, niêm yết thành công Siloam trên Sàn Giao dịch Chứng khoán Jakarta với định giá 1,8 tỷ USD và đạt chứng nhận JCI đầu tiên tại Indonesia. Tại Myanmar, ông dẫn dắt Tập đoàn Y tế Pun Hlaing vượt qua khủng hoảng chỉ trong 18 tháng và xây dựng bệnh viện đạt chuẩn JCI đầu tiên tại quốc gia này. Gần đây nhất với vai trò CEO của O2 Healthcare Group Singapore (2023 - 2025), ông đã thúc đẩy tăng trưởng doanh thu trên 60%.`
  },

  // 7. Adj Prof. Dr Sayanta Jana
  {
    id: "adj-prof-dr-sayanta-jana",
    name: "Adj. Prof. Dr. Sayanta Jana",
    category: "keynote",
    categoryLabelEn: "ADBA Academic Leadership & Health Systems",
    categoryLabelVi: "Lãnh đạo Học thuật ADBA & Quản trị Y tế",
    photo: "assets/images/speakers/adj-prof-dr-sayanta-jana.jpg?v=20261021_2238",
    roleEn: "Academic Dean, Australian Doctors Business Academy (ADBA)",
    roleVi: "Trưởng khoa Học thuật, Viện Kinh đoàn Y khoa Úc (ADBA)",
    orgEn: "Australian Doctors Business Academy | Curtin & Notre Dame Universities",
    orgVi: "Viện Kinh doanh Y khoa Úc (ADBA) | ĐH Curtin & Notre Dame",
    badges: ["🎓 Dean Australian Doctors Business Academy", "🏛️ ACHS Lead Surveyor & AMC Former Council Member", "💡 Digital Health Researcher & MedTech Startup Board"],
    badgesVi: ["🎓 Trưởng khoa Học thuật ADBA", "🏛️ Đánh giá viên Trưởng ACHS & Nguyên UV HĐ Y khoa Úc", "💡 Nhà nghiên cứu Y tế Số & Cố vấn MedTech"],
    bioEn: `Adjunct Professor Dr Sayanta Jana is the Academic Dean of the Australian Doctors Business Academy (ADBA), a Fellow of the Royal Australasian College of Medical Administrators (FRACMA), and a distinguished senior healthcare executive who has occupied key executive positions across public and private healthcare systems nationally in Australia. Dr Jana holds academic appointments as Adjunct Professor at Curtin University Medical School and the University of Notre Dame Australia.

He is a Fellow and Certified Health Manager of the Australasian College of Health Service Management (ACHSM), holds a Master of Health Management from UNSW, and is a Lean Six Sigma Green Belt. For more than 15 years, Dr Jana has served as an ACHS Surveyor with the Australian Council on Healthcare Standards and as a Lead Surveyor with the Postgraduate Medical Council of Western Australia. He previously represented all Australian public and private hospitals on the Australian Medical Council (AMC) from 2014 to 2020.

Dr Jana sits on the editorial boards and peer-reviews for leading international medical journals, including BMJ Leader and Emerald Leadership in Health Services. An active executive coach and researcher, he is currently undertaking PhD research at La Trobe University on digital health platform ecosystems and serves on the advisory boards of multiple MedTech innovations.`,
    bioVi: `Giáo sư Thỉnh giảng, Bác sĩ Sayanta Jana là Trưởng khoa Học thuật của Viện Kinh doanh Y khoa Úc (ADBA), Thành viên Viện Hàn lâm Quản trị Y tế Hoàng gia Australasia (FRACMA), và là nhà điều hành y tế cấp cao từng nắm giữ nhiều vị trí chủ chốt trong cả hai khối y tế công lập và tư nhân tại Úc. Giáo sư Jana hiện là Giáo sư Thỉnh giảng tại Trường Y Đại học Curtin và Đại học Notre Dame Australia.

Ông là Thành viên Cao cấp và Nhà Quản trị Y tế Chứng nhận của ACHSM, sở hữu bằng Thạc sĩ Quản trị Y tế (UNSW) và Chứng chỉ Đai Xanh Lean Six Sigma. Suốt hơn 15 năm qua, TS. Jana là Đánh giá viên Trưởng của Hội đồng Tiêu chuẩn Y tế Úc (ACHS) và Hội đồng Y khoa Sau đại học Tây Úc. Giai đoạn 2014 - 2020, ông vinh dự là Đại diện của toàn bộ các bệnh viện công và tư nhân Úc tại Hội đồng Y khoa Úc (Australian Medical Council - AMC).

Giáo sư Jana là thành viên ban biên tập và bình duyệt của nhiều tạp chí y khoa hàng đầu như BMJ Leader và Emerald Leadership in Health Services. Ông là chuyên gia cố vấn cho các nhà lãnh đạo y khoa tương lai, hiện đang thực hiện nghiên cứu Tiến sĩ (PhD) tại Đại học La Trobe về hệ sinh thái nền tảng y tế số, đồng thời là thành viên hội đồng cố vấn cho nhiều doanh nghiệp công nghệ y tế tiên phong.`
  },

  // 8. Mr. Bao Tran
  {
    id: "mr-bao-tran",
    name: "Mr. Bao Tran",
    category: "invest",
    categoryLabelEn: "Healthcare Investment & Strategic Advisory",
    categoryLabelVi: "Đầu tư Y tế & Cố vấn Chiến lược Cấp cao",
    photo: "assets/images/speakers/tran-quoc-bao.jpg?v=20261021_2330",
    roleEn: "Senior Advisor & Healthcare Executive",
    roleVi: "Cố vấn Cấp cao & Chuyên gia Điều hành Y tế",
    orgEn: "Asian Hospital & Healthcare Management (AHHM)",
    orgVi: "Asian Hospital & Healthcare Management (AHHM)",
    badges: ["🏆 VCCI Hospital CEO of the Year 2024", "🌐 Senior Advisor AHHM", "💼 CFA · CMT · CPWA · 12 M&A"],
    badgesVi: ["🏆 CEO Bệnh viện của Năm 2024 (VCCI)", "🌐 Cố vấn Cấp cao AHHM", "💼 CFA · CMT · CPWA · 12 Thương vụ M&A"],
    bioEn: `Mr. Bao Tran is a Vietnamese healthcare executive and investment advisor with more than 15 years of experience spanning hospital management, healthcare investment, and corporate finance. He is the first Vietnamese appointed as Senior Advisor to Asian Hospital & Healthcare Management (AHHM), one of the Asia-Pacific region's leading B2B healthcare platforms. Bao has held chief executive and senior leadership positions across Vietnam's private healthcare sector, including CEO of Prima Saigon Medical Center, Hoan My International Eye Hospital, and City International Hospital. Earlier in his career, he held senior management roles at FV Hospital, TMMC Healthcare, and Cao Thang International Eye Hospital. He was recognized as Hospital Chief Executive Officer of the Year 2024 by the Vietnam Chamber of Commerce and Industry (VCCI). With professional credentials including CFA, CMT, and CPWA, Bao has advised on 12 healthcare mergers and acquisitions across Vietnam.`,
    bioVi: `Ông Bảo Trần là chuyên gia điều hành và cố vấn đầu tư y tế hàng đầu với hơn 15 năm kinh nghiệm về quản trị bệnh viện, đầu tư y tế và tài chính doanh nghiệp. Ông là người Việt Nam đầu tiên được bổ nhiệm làm Cố vấn Cấp cao của Asian Hospital & Healthcare Management (AHHM) - nền tảng truyền thông y tế B2B hàng đầu khu vực Châu Á - Thái Bình Dương. Ông từng đảm nhiệm chức vụ Tổng Giám đốc tại Trung tâm Y khoa Prima Saigon, Bệnh viện Mắt Quốc tế Hoàn Mỹ, Bệnh viện Quốc tế City, cùng các vị trí quản lý cấp cao tại Bệnh viện FV, TMMC Healthcare và Bệnh viện Mắt Cao Thắng. Ông được VCCI vinh danh là Tổng Giám đốc Bệnh viện của Năm 2024. Với các chứng chỉ tài chính quốc tế CFA, CMT, CPWA, ông đã trực tiếp tư vấn 12 thương vụ M&A y tế và tham gia tái cấu trúc, mở rộng quy mô nhiều bệnh viện lớn tại Việt Nam.`
  },

  // 9. Dr. Mason Cobb
  {
    id: "dr-mason-cobb",
    name: "Dr. Mason Cobb",
    category: "invest",
    categoryLabelEn: "Healthcare Founder & Senior Living",
    categoryLabelVi: "Sáng lập Y tế & Dưỡng lão Y khoa",
    photo: "assets/images/speakers/mason-cobb.png?v=20261021_2330",
    roleEn: "US Board-Certified Surgeon & Chairman",
    roleVi: "Bác sĩ Phẫu thuật Hoa Kỳ & Chủ tịch Hội đồng Quản trị",
    orgEn: "Golden Sunrise Growth & Management | Victoria Healthcare",
    orgVi: "Golden Sunrise Growth & Management | Victoria Healthcare",
    badges: ["🩺 US Board-Certified Surgeon", "🏥 Founder Victoria Healthcare & Columbia Asia", "🏡 Medicine 3.0 Senior Living"],
    badgesVi: ["🩺 Bác sĩ Phẫu thuật Chứng nhận Hoa Kỳ", "🏥 Sáng lập Victoria Healthcare & Columbia Asia", "🏡 Dưỡng lão Y học 3.0"],
    bioEn: `Dr. Loren Mason Cobb is a pioneering physician, surgeon, and healthcare leader who has advanced healthcare in Vietnam for over two decades. He was the Founding General Director and later Chairman of the Columbia-Gia Dinh International Clinic Joint Venture (now Columbia Asia). He also co-founded and led Victoria Healthcare Vietnam, developing one of the country's most trusted private healthcare systems. Currently, Dr. Mason serves as Chairman of Golden Sunrise Growth & Management JSC, leading the development of Vietnam's first world-class senior living facilities dedicated to preventive, predictive, and personalized healthcare (Medicine 3.0). Dr. Mason holds Board Certifications in Pediatric Surgery and General Surgery in the United States and has led multiple international medical missions.`,
    bioVi: `Bác sĩ Loren Mason Cobb là bác sĩ phẫu thuật và nhà lãnh đạo y tế tiên phong với hơn hai thập kỷ cống hiến cho sự phát triển của ngành y tế Việt Nam. Ông là Tổng Giám đốc Sáng lập và sau đó là Chủ tịch của Liên doanh Phòng khám Quốc tế Columbia - Gia Định (nay là Columbia Asia). Ông cũng là người đồng sáng lập và dẫn dắt Hệ thống Y khoa Quốc tế Victoria Healthcare, xây dựng một trong những hệ thống y tế tư nhân uy tín nhất tại Việt Nam. Hiện tại, ông là Chủ tịch của Golden Sunrise Growth & Management JSC, dẫn dắt phát triển các khu đô thị dưỡng lão chuẩn quốc tế đầu tiên tại Việt Nam ứng dụng mô hình Y học 3.0 (y học dự phòng, tiên đoán và cá thể hóa). Bác sĩ Mason sở hữu các chứng chỉ Hội đồng Ngoại khoa và Phẫu thuật Nhi tại Hoa Kỳ.`
  },

  // 10. Dr. Faizal Kassim
  {
    id: "dr-faizal-kassim",
    name: "Dr. Faizal Kassim",
    category: "executive",
    categoryLabelEn: "Group Clinical Governance & Hospital Operations",
    categoryLabelVi: "Quản trị Lâm sàng Tập đoàn & Vận hành Bệnh viện",
    photo: "assets/images/speakers/dr-faizal-kassim.jpg?v=20261021_2330",
    roleEn: "Group Chief Medical Officer (GCMO)",
    roleVi: "Tổng Giám đốc Y khoa Tập đoàn (GCMO)",
    orgEn: "Hoan My Medical Corporation",
    orgVi: "Tập đoàn Y khoa Hoàn Mỹ",
    badges: ["🏥 Group CMO Hoan My Medical", "🇸🇬 NUS Alum · Public Service Medal (PBM)", "🩺 23+ Years Clinical Governance"],
    badgesVi: ["🏥 Tổng Giám đốc Y khoa Tập đoàn Hoàn Mỹ", "🇸🇬 Cựu sinh viên NUS · Huân chương Dịch vụ Công", "🩺 23+ Năm Quản trị Lâm sàng"],
    bioEn: `Dr Faizal Kassim is Group Chief Medical Officer of Hoan My Medical Corporation, Vietnam's largest private healthcare network. He holds group-level medical authority over hospitals and clinics in ten provinces, including Hoan My Da Nang, with about 2,900 beds and more than 5,500 staff. His mandate is to turn a federation of strong hospitals into one governed clinical system that meets JCI, ACHSI and Vietnamese Ministry of Health standards at the same time.

He trained in Singapore as an emergency physician (MBBS, National University of Singapore) and has more than 23 years of experience in emergency medicine, primary care, clinical governance and P&L leadership across Singapore, Vietnam, Bangladesh and India. During COVID-19, he set up ten national vaccination centres that delivered three million doses. He also built quarantine corridors that reopened labour flows from India and Bangladesh to Singapore. He has founded a primary care group, led a JCI accreditation, and held the licences for more than 30 clinics.

The Republic of Singapore awarded him the Pingat Bakti Masyarakat (Public Service Medal).`,
    bioVi: `Tiến sĩ Bác sĩ Faizal Kassim là Tổng Giám đốc Y khoa Tập đoàn (Group Chief Medical Officer) của Tập đoàn Y khoa Hoàn Mỹ - mạng lưới y tế tư nhân lớn nhất Việt Nam. Ông phụ trách chỉ đạo chuyên môn y khoa cấp tập đoàn đối với toàn bộ các bệnh viện và phòng khám tại 10 tỉnh thành, bao gồm Bệnh viện Hoàn Mỹ Đà Nẵng, với quy mô khoảng 2.900 giường bệnh và hơn 5.500 nhân sự. Trọng trách của ông là định hình và chuẩn hóa hệ thống quản trị lâm sàng thống nhất đạt chuẩn JCI, ACHSI và Bộ Y tế Việt Nam.

Ông được đào tạo bác sĩ cấp cứu tại Singapore (Cử nhân Y khoa & Phẫu thuật MBBS tại Đại học Quốc gia Singapore - NUS) với hơn 23 năm kinh nghiệm trong lĩnh vực y học cấp cứu, chăm sóc y tế ban đầu, quản trị lâm sàng và điều hành kinh doanh y tế tại Singapore, Việt Nam, Bangladesh và Ấn Độ. Trong giai đoạn đại dịch COVID-19, ông đã trực tiếp thiết lập 10 trung tâm tiêm chủng quốc gia phân phối 3 triệu liều vắc xin. Ông cũng từng sáng lập tập đoàn chăm sóc sức khỏe ban đầu, trực tiếp dẫn dắt quy trình kiểm định chất lượng JCI và quản lý giấy phép hoạt động cho hơn 30 phòng khám.

Ông vinh dự được Nhà nước Cộng hòa Singapore trao tặng Huân chương Dịch vụ Công (Pingat Bakti Masyarakat - PBM).`
  }
];
