
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">School Connect</h3>
            <p className="text-gray-600 text-sm">
              A comprehensive Flutter + Firebase mobile application 
              for modern school management.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>Authentication</li>
              <li>Assignment Management</li>
              <li>Announcements</li>
              <li>Leave Application</li>
              <li>Digital Library</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Tech Stack</h4>
            <ul className="space-y-2 text-sm">
              <li>Flutter</li>
              <li>Firebase Authentication</li>
              <li>Firestore Database</li>
              <li>Firebase Storage</li>
              <li>Provider/Riverpod</li>
            </ul>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} School Connect App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
