import React, { useState } from "react";
import { Sidebar, Menu, Icon, Button } from "semantic-ui-react";

const SideBar = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        vertical
        visible={visible}
        width="very thin"
        compact
        color="violet"
      >
        <Menu.Item as="a">
          <Button as="a" circular content="웹린" color="violet" />
        </Menu.Item>

        <Menu.Item as="a">
          <Button as="a" circular content="GT" color="violet" />
        </Menu.Item>

        <Menu.Item as="a" color="violet">
          <Button
            icon="add"
            color="violet"
            size="mini"
            style={{ padding: 15 }}
          />
        </Menu.Item>
        <Menu.Item>
          <button>Hello</button>
        </Menu.Item>
      </Sidebar>
    </>
  );
};

export default SideBar;
