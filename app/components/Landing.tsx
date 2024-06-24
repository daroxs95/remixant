import {
  Flex,
  Layout,
  Typography,
  Image,
  Card,
  Divider,
  Form,
  Input,
  Button,
  Checkbox,
} from "antd";

const { Title, Paragraph } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const MAX_WIDTH = "700px";

export function Landing() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Flex style={{ maxWidth: MAX_WIDTH, margin: "auto", width: "100%" }}>
          <Title level={3} style={{ margin: 0, color: "white" }}>
            Greenpeace
          </Title>
        </Flex>
      </Header>
      <Content
        style={{
          margin: "auto",
          width: "100%",
          maxWidth: MAX_WIDTH,
          padding: 24,
          height: "100%",
        }}
      >
        <Flex
          justify={"center"}
          align={"center"}
          style={{ height: "100%" }}
          vertical
        >
          <Card
            style={{
              width: "100%",
            }}
          >
            <Flex>
              <Flex vertical>
                <Title level={2}>Sign up for an account</Title>
                <Paragraph>
                  Enter your data below and you will receive regular updates on
                  your actions worldwide
                </Paragraph>
              </Flex>
              <Image src={"https://placehold.co/150"} alt={""} />
            </Flex>
            <Divider />
            <Form layout="vertical">
              <Form.Item label="Full name" required>
                <Input placeholder="" />
              </Form.Item>
              <Form.Item label="Email" required>
                <Input placeholder="" />
              </Form.Item>
              <Form.Item>
                <Checkbox>Please send me weekly updates</Checkbox>
              </Form.Item>
              <Divider />
              <Form.Item>
                <Flex justify={"space-between"}>
                  <Button>Cancel</Button>
                  <Button type="primary">Sign up</Button>
                </Flex>
              </Form.Item>
            </Form>
          </Card>
        </Flex>
      </Content>
      <Footer>
        <Flex vertical style={{ maxWidth: MAX_WIDTH, margin: "auto" }}>
          <Flex justify="space-between" align="center">
            <Paragraph style={{ color: "white", margin: 0 }}>
              Fighting together for a better world
            </Paragraph>
            <div>
              <a style={{ color: "white" }} href="/#">
                Home
              </a>
              <Divider type="vertical" style={{ borderColor: "white" }} />
              <a style={{ color: "white" }} href="/#">
                2024 reports
              </a>
              <Divider type="vertical" style={{ borderColor: "white" }} />
              <a style={{ color: "white" }} href="/#">
                Careers
              </a>
              <Divider type="vertical" style={{ borderColor: "white" }} />
              <a style={{ color: "white" }} href="/#">
                Services
              </a>
            </div>
          </Flex>
          <Divider style={{ borderColor: "white" }} />
          <Paragraph style={{ color: "white", margin: "auto" }}>
            © 2024 Greenpeace International
          </Paragraph>
        </Flex>
      </Footer>
    </Layout>
  );
}
