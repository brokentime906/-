import React from "react";
import { Dropdown, Button, Icon } from "semantic-ui-react";

const DropdownMenuHeader = () => {
  return (
    <>
      <Dropdown icon="bars">
        <Dropdown.Menu>
          <Dropdown.Item>
            <Dropdown text="File">
              <Dropdown.Menu>
                <Dropdown.Item text="Preferences..." description="Ctrl + ," />
                <Dropdown.Divider />
                <Dropdown.Item text="Close..." description="Ctrl + W" />
                <Dropdown.Item text="Quit Slack..." description="Ctrl + Q" />
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item text="Edit" />
          <Dropdown.Item text="View" />
          <Dropdown.Item text="History" />
          <Dropdown.Item text="Help" />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownMenuHeader;
