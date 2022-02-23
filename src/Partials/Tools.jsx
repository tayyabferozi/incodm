import React from "react";
import Checkbox from "../components/Checkbox";

const Tools = () => {
  return (
    <div className="tools">
      <h3>Tools</h3>

      <div className="tools-main">
        <div className="tools-checkbox-container tools-main-title">
          <Checkbox
            rootClassName="fs-12 fw-bold lh-15"
            label="Select all tools"
          />
        </div>
        <div className="tools-section">
          <div className="tools-checkbox-container tools-section-title">
            <Checkbox small bold label="Core Tools" />
          </div>
          {[
            {
              label: "Reports",
              subLabel:
                "Tell the story of any project's schedule changes, work progress and more.",
            },
            {
              label: "Documents",
              subLabel:
                "Upload, store and organize project documents. Manage revisions, share via email.",
            },
            {
              label: "Directory",
              subLabel: "Store contact data for all your project team members.",
            },
            {
              label: "Tasks",
              subLabel:
                "Track and manage action items for the life span of a project.",
            },
          ].map((el) => {
            const { label, subLabel } = el;

            return (
              <div className="tools-checkbox-container tools-section-item">
                <Checkbox withReorder bold label={label} subLabel={subLabel} />
              </div>
            );
          })}
        </div>
        <div className="tools-section">
          <div className="tools-checkbox-container tools-section-title">
            <Checkbox small bold label="Project Management" />
          </div>
          {[
            {
              label: "Emails",
              subLabel: "Organize and archive all project emails.",
            },
            {
              label: "RFIs",
              subLabel:
                "Distribute RFIs via email or fax. Send automated reminders when items are overdue.",
            },
            {
              label: "Submittals",
              subLabel: "Track and manage submittals.",
            },
            {
              label: "Transmittals",
              subLabel: "Track and manage transmittals.",
            },
            {
              label: "Meetings",
              subLabel: "Track meeting agendas and meeting minutes.",
            },
            {
              label: "Schedule",
              subLabel:
                "Schedule project tasks and receive email reminders when tasks are overdue.",
            },
            {
              label: "Photos",
              subLabel:
                "Upload, store and organize project photos. Share photos via email.",
            },
            {
              label: "Drawings",
              subLabel:
                "Full version control and change history for all drawing files.",
            },
            {
              label: "Specifications",
              subLabel: "Version control and viewing of specification files.",
            },
            {
              label: "Punch List",
              subLabel: "Track punch list items and approvals via email.",
            },
            {
              label: "Daily Log",
              subLabel:
                "Automatic weather logging, as well as customizable fields for work completed, deliveries, site visitors, and more.",
            },
          ].map((el) => {
            const { label, subLabel } = el;

            return (
              <div className="tools-checkbox-container tools-section-item">
                <Checkbox withReorder bold label={label} subLabel={subLabel} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tools;
