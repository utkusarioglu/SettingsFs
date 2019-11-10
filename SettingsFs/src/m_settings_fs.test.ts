import { M_SettingsFs } from "./m_settings_fs";

test("fs_read", () => {
    const class_expression = class extends M_SettingsFs {

        constructor() {
            super();
        }

        public try_Read() {

            try {
                this.read_set_AllSettingsFromFile(
                    "D:/",
                    "gdf"
                );
                return "success";
            }
            catch {
                return "fail";
            }

        }
    }

    const class_instance = new class_expression();
    const response = class_instance.try_Read();

    expect(response).toBe("success");
});