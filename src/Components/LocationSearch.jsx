import { FaMapMarkerAlt } from "react-icons/fa";
import { Input, Tooltip, Button } from "antd";
import { BiCurrentLocation } from "react-icons/bi";

const suffix = (
  <FaMapMarkerAlt
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const LocationSearch = () => (
  <>
    <Input
      placeholder="Enter location"
      className="h-[42px]"
      prefix={suffix}
      suffix={
        <Tooltip title="Detect">
          <Button
            type="text"
            icon={<BiCurrentLocation style={{ color: "#1677ff" }} />}
            onClick={() => console.log("Detect clicked")}
          />
        </Tooltip>
      }
    />
  </>
);

export default LocationSearch;
