const FormLabel = ({ labelName }: { labelName: string }) => {
  return (
    <div>
      <p className="text-[12px] uppercase ">{labelName}</p>
    </div>
  );
};

export default FormLabel;
