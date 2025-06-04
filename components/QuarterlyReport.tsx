import { ArrowRight, FileText } from "lucide-react";

const reports = [
  {
    edition: 1,
    title: "Anti-Corruption Agencies in Nigeria",
    summary:
      "A comprehensive analysis of Nigeria's 15+ Anti-Corruption Agencies (ACAs) and the Inter-Agency Task Team on Corruption.",
    keyPoints: [
      "Overview of 15+ Anti-Corruption Agencies",
      "State-level anti-corruption initiatives",
      "Impact assessment and effectiveness analysis",
    ],
    link: "https://www.amazon.com/gp/product/B0BGLXNZFD?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks",
  },
  {
    edition: 2,
    title: "Building Viable Anti-Corruption Institutions",
    summary:
      "Critical examination of institutional frameworks and recommendations for strengthening anti-corruption agencies.",
    keyPoints: [
      "Institutional viability assessment",
      "Professional development strategies",
      "Legal framework enhancement",
    ],
    link: "https://www.amazon.com/dp/B0BGM2QB2G?binding=kindle_edition&ref=dbs_dp_sirpi",
  },
  // link 3: https://www.amazon.com/gp/product/B0CP2TK21F?ref_=dbs_m_mng_rwt_calw_tkin_2&storeType=ebooks
  {
    edition: 4,
    title: "Public Procurement Act 2007: Implementation Challenges",
    summary:
      "Analysis of the Public Procurement Act 2007 and its effectiveness in preventing corruption in government procurement.",
    keyPoints: [
      "Policy implementation assessment",
      "Procurement transparency analysis",
      "Regulatory compliance evaluation",
    ],
    link: "https://www.amazon.com/gp/product/B0DDYBBJDR?ref_=dbs_m_mng_rwt_calw_tkin_3&storeType=ebooks",
  },
  {
    edition: 5,
    title: "Leadership and Anti-Corruption Governance",
    summary:
      "Examination of leadership roles in governance and anti-corruption initiatives across various administrative levels.",
    keyPoints: [
      "Leadership impact analysis",
      "Governance best practices",
      "Administrative recommendations",
    ],
    link: "https://www.amazon.com/gp/product/B0F9VQLD36?ref_=dbs_m_mng_rwt_calw_tkin_4&storeType=ebooks",
  },
];

const QuarterlyReport = () => {
  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-800'>
      <div className='max-w-6xl mx-auto px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-navy-900 dark:text-white'>
            Quarterly Anti-Corruption Executive Summary
          </h2>
          <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            In-depth analysis and research on corruption prevention,
            institutional reforms, and governance enhancement in Nigeria.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {reports.map((report) => (
            <div
              key={report.edition}
              className='bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-600'>
              <div className='flex items-start mb-6'>
                <div className='flex items-center gap-3'>
                  <FileText className='text-blue-500 dark:text-gold-500 w-6 h-6' />
                  <h3 className='font-bold text-xl text-navy-900 dark:text-white'>
                    Edition {report.edition}
                  </h3>
                </div>
              </div>

              <h4 className='font-semibold text-lg mb-3 text-navy-900 dark:text-white'>
                {report.title}
              </h4>

              <p className='text-gray-600 dark:text-gray-300 mb-6 line-clamp-2'>
                {report.summary}
              </p>

              <div className='space-y-2 mb-6'>
                {report.keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300'>
                    <div className='w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-gold-500'></div>
                    {point}
                  </div>
                ))}
              </div>

              <div className='flex items-center pt-4 border-t border-gray-100 dark:border-gray-600'>
                <a
                  href={report.link}
                  target='_blank'
                  className='text-blue-500 hover:text-blue-700 dark:text-gold-500 dark:hover:text-gold-700 font-medium text-sm inline-flex items-center justify-center gap-1 transition-colors cursor-pointer'>
                  Get a Copy
                  <ArrowRight className='w-4 h-4' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuarterlyReport;
