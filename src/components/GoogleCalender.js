import React, { useEffect } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = "1062446524812-1l30sj109msis5phh20ls98hl10nuo36.apps.googleusercontent.com";
const API_KEY = " AIzaSyAGoq4qjKQHOGvMDQyjxPqSZKILBxlRILk";
const SCOPES = "https://www.googleapis.com/auth/calendar";

export default function GoogleCalendar() {
  useEffect(() => {
    const loadGapi = async () => {
      try {
        gapi.load("client:auth2", async () => {
          await gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            scope: SCOPES,
          });
          console.log("Google API initialized");
        });
      } catch (error) {
        console.error("Error initializing Google API:", error);
      }
    };

    loadGapi();
  }, []);

  const handleAuthClick = async () => {
    try {
      const authInstance = gapi.auth2.getAuthInstance();
      await authInstance.signIn();
      console.log("User signed in");
      fetchCalendarEvents();
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const fetchCalendarEvents = async () => {
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      });
      console.log("Events fetched:", response.result.items);
    } catch (error) {
      console.error("Error fetching calendar events:", error);
    }
  };

  return (
    <div>
      <button onClick={handleAuthClick}>Sign in with Google</button>
    </div>
  );
}
