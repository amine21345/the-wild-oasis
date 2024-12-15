import React from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens={"cabin-form"}>
          {<Button>Add new cabin</Button>}
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// const AddCabin = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal setIsOpenModal={setIsOpenModal}>
//           <CreateCabinForm setIsOpenModal={setIsOpenModal} />
//         </Modal>
//       )}
//     </div>
//   );
// };
export default AddCabin;
