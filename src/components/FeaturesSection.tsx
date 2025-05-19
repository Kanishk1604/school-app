
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Authentication",
    description: "Secure role-based login for students and teachers via Firebase Auth",
    icon: "👤"
  },
  {
    title: "Assignment Management",
    description: "Upload, view, and submit assignments with integrated Firebase Storage",
    icon: "📝"
  },
  {
    title: "Announcements",
    description: "Real-time school announcements via Firebase Firestore",
    icon: "📢"
  },
  {
    title: "Leave Application",
    description: "Students can request leaves that teachers can approve or reject",
    icon: "📅"
  },
  {
    title: "Digital Library",
    description: "Access and download educational resources in various formats",
    icon: "📚"
  },
  {
    title: "Timetable Manager",
    description: "View and manage class schedules for students and teachers",
    icon: "🕒"
  },
  {
    title: "Daily Quotes",
    description: "Motivational content displayed on the home screen each day",
    icon: "💭"
  },
  {
    title: "Grades & Reports",
    description: "Track academic progress and download detailed report cards",
    icon: "📊"
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive School Management Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform combines powerful educational tools with an intuitive interface 
            for students, teachers, and administrators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-5 py-2 rounded-full shadow text-sm font-medium">Flutter</div>
            <div className="bg-white px-5 py-2 rounded-full shadow text-sm font-medium">Firebase Auth</div>
            <div className="bg-white px-5 py-2 rounded-full shadow text-sm font-medium">Firestore</div>
            <div className="bg-white px-5 py-2 rounded-full shadow text-sm font-medium">Firebase Storage</div>
            <div className="bg-white px-5 py-2 rounded-full shadow text-sm font-medium">Provider/Riverpod</div>
            <div className="bg-white px-5 py-2 rounded-full shadow text-sm font-medium">Responsive UI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
