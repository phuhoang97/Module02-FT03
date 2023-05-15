import { Button, Checkbox, Form, Input } from "antd";
import { Rate } from "antd";
import { useState } from "react";
import { QRCode } from "antd";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

// const onFinish = (values) => {
//   console.log("Success:", values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

// const DemoAnt = () => {
//   // function DemoAnt () {
//   // }
//   const [value, setValue] = useState(3);
//   return (
//     <div>
//       {/* Form Andt */}
//       <Form
//         name='basic'
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 16,
//         }}
//         style={{
//           maxWidth: 600,
//         }}
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete='off'
//       >
//         <Form.Item
//           label='Username'
//           name='username'
//           rules={[
//             {
//               required: true,
//               message: "Please input your username!",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label='Password'
//           name='password'
//           rules={[
//             {
//               required: true,
//               message: "Please input your password!",
//             },
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item
//           name='remember'
//           valuePropName='checked'
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//         <Form.Item
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Button type='primary' htmlType='submit'>
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>

//       {/* Rate Antd */}
//       <span>
//         <Rate tooltips={desc} onChange={setValue} value={value} />
//         {value ? <span className='ant-rate-text'>{desc[value - 1]}</span> : ""}
//       </span>
//     </div>
//   );
// };

function DemoAnt() {
  const [value, setValue] = useState(3);

  return (
    <>
      <span>
        <Rate tooltips={desc} onChange={setValue} value={value} />
        {value ? <span className='ant-rate-text'>{desc[value - 1]}</span> : ""}
      </span>
      {/* QR code */}
      <QRCode errorLevel='H' value='https://www.google.com/' />
    </>
  );
}
export default DemoAnt;
