import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Dan DevLog",
};

export default async function Resume() {
  return (
    <div>
      <h1>Resume</h1>
    </div>
  );
}
