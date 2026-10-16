export const serviceGroups = [
  {
    number: "1-",
    title: "التأسيس والتجهيز",
    icon: "Store",
    services: [
      {
        id: "account-setup",
        title: "تأسيس حساب",
        description:
          "إنشاء الملف التجاري للمنشأة وتجهيزه بالبيانات الأساسية التي تقدمها",
        icon: "Store",
      },
      {
        id: "ownership-verification",
        title: "إثبات الملكية",
        description:
          "إرشادك خلال خطوات إثبات ملكية المنشأة الرسمية، مع إتمام التحقق من جانب المالك",
        icon: "ShieldCheck",
      },
      {
        id: "profile-completion",
        title: "إكمال الملف التجاري",
        description:
          "مراجعة بيانات الملف وإضافة المعلومات والصور المتاحة بالتنسيق مع منشأتك",
        icon: "FileCheck2",
      },
    ],
  },
  {
    number: "2-",
    title: "الإدارة والتواصل",
    icon: "MessageCircle",
    services: [
      {
        id: "content-management",
        title: "إدارة المحتوى",
        description:
          "تنظيم وتحديث محتوى الملف وفق المعلومات والعروض التي تعتمدها المنشأة",
        icon: "SearchCheck",
      },
      {
        id: "review-responses",
        title: "الرد على المراجعات",
        description:
          "إعداد ردود مهنية على مراجعات العملاء، بما يعكس أسلوب المنشأة ويحترم تجربتهم",
        icon: "MessageCircle",
      },
    ],
  },
  {
    number: "3-",
    title: "التصوير والتوثيق",
    icon: "Camera",
    services: [
      {
        id: "photography",
        title: "التصوير والتوثيق",
        description:
          "تصوير المكان أو المنتجات وتجهيز صور مناسبة لإضافتها إلى الملف التجاري، وفق نطاق يتم الاتفاق عليه مسبقًا",
        icon: "Camera",
      },
    ],
  },
] as const;

export type ServiceId =
  (typeof serviceGroups)[number]["services"][number]["id"];
