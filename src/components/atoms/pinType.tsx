import usePinType from "@/hooks/apis/pinType/query/usePinType";

const PinType = () => {
  const query = usePinType();

  return (
    <div>
      {query.isSuccess && query.data.map((d) => <div key={d.id}>{d.name}</div>)}
    </div>
  );
};

export default PinType;
