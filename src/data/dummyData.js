const dummyData = {
    tickets: {
      total: 2300,
      clientReplies: 121,
      staffReplies: 91,
      unanswered: 231,
    },
    statistics: [
      { status: "Overdue", count: 110, color: "#f28b82" },
      { status: "In progress", count: 52, color: "#fbbc04" },
      { status: "Not Started", count: 21, color: "#a1a1a1" },
      { status: "Waiting client", count: 99, color: "#e87cfa" },
      { status: "Done", count: 521, color: "#34a853" },
    ],
    recentTickets: [
      { date: "Feb 8, 2024", title: "The More Important Work", status: "Overdue" },
      { date: "Feb 11, 2024", title: "A Small Thing at Hand", status: "Open" },
      { date: "Feb 5, 2024", title: "Color Theory Insights", status: "Completed" },
      { date: "Feb 4, 2024", title: "Mechanical Insights", status: "Pending" },
    ],
  };
  
  export default dummyData;
  