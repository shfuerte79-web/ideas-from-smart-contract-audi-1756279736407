import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '```json
[
  {
    \"title\": \"AI-Powered Smart Contract Risk Assessment Tool\",
    \"description\": \"أداة تستخدم الذكاء الاصطناعي لتقييم المخاطر المحتملة في العقود الذكية قبل نشرها، مما يساعد المطورين على تجنب الثغرات الأمنية.\",
    \"mvp_plan\": \"تطوير واجهة بسيطة لتحميل العقود الذكية، واستخدام نموذج ذكاء اصطناعي مدرب مسبقًا لتحليل الكود وتقديم تقرير بالمخاطر المحتملة.\"
  },
  {
    \"title\": \"Smart Contract Compliance Checker\",
    \"description\": \"أداة للتحقق من التوافق القانوني للعقود الذكية مع اللوائح المحلية والدولية، مما يساعد الشركات على تجنب المشاكل القانونية.\",
    \"mvp_plan\": \"إنشاء واجهة لتحميل العقود الذكية، وتطوير خوارزمية بسيطة لمقارنة الكود مع مجموعة من القوانين واللوائح المعروفة، وتقديم تقرير بالتوافق.\"
  },
  {
    \"title\": \"Decentralized Bug Bounty Platform for Smart Contracts\",
    \"description\": \"منصة لتمكين المطورين من نشر عقودهم الذكية وتلقي تقارير عن الثغرات من المجتمع، مع مكافآت للمكتشفين.\",
    \"mvp_plan\": \"إنشاء واجهة مستخدم بسيطة تسمح للمطورين بنشر عقودهم، وتطوير نظام نقاط لمكافأة المكتشفين، مع أدوات تواصل بسيطة بين المطورين والمكتشفين.\"
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}