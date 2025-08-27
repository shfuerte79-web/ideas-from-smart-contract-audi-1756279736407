export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Smart Contract Auditor AI
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
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
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}