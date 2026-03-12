import Login from "../Login";
import { Modal } from "antd";
import Register from "../Register";
import "./AuthModal.scss";
import ForgotPassword from "../ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { closeAuthModal } from "../../actions/authModal";
import { useForm } from "antd/es/form/Form";

function AuthModal() {
  const modal = useSelector(state => state.AuthModalReducer);
  const dispatch = useDispatch();
  const [form] = useForm();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    // setIsModalOpen(state.open);
    form.resetFields();
    dispatch(closeAuthModal());
  };


  return (
    <>
      <Modal
        open={modal.open}
        onCancel={handleCancel}
        footer={null}
        className="authmodal"
      >
        {modal.mode === "login" && (
          <Login form={form} />
        )}
        {modal.mode === "register" && (
          <Register />
        )}
        {modal.mode === "forgotPassword" && (
          <ForgotPassword />
        )}
      </Modal>
    </>
  )
}

export default AuthModal;