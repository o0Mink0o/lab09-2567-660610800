import React from "react";

interface FooterProps{
  year: string;
  fullName: string;
  studentId: string;  // student id should be a string type in your actual application, not a number type. In this example, it's a string for simplicity.  // your studentId prop type here
  //... other props you might need to pass down to your components (e.g., links, etc.)  // your other props here
}
export default function Footer(props:FooterProps) {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        Copyright © {props.year} {props.fullName} {props.studentId}
      </p>
    </div>
  );
}
