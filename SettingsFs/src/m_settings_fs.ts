
/* ////////////////////////////////////////////////////////////////////////////
 *
 *	IMPORTS
 *
 * ///////////////////////////////////////////////////////////////////////// */

/*
 *	NODE MODULES
 */
// @ts-ignore
const Fs = __non_webpack_require__("fs");

/*
 *	MIXINS
 */
import { M_Settings } from "@utkusarioglu/settings";

/*
 *	DATATYPES
 */
import {
    t_absoluteFilePath,
    t_filename,
    t_relativeDirectory,
} from "@utkusarioglu/settings/t_settings";





/* ////////////////////////////////////////////////////////////////////////////
 *
 *	EXPORTS
 *
 * ///////////////////////////////////////////////////////////////////////// */

export interface M_SettingsFs extends
    M_Settings { }

/**
 * Provides storage access for reading settings
 * 
 * @requires M_settings
 *
 * @remarks
 * Service: Settings
 */
export abstract class M_SettingsFs {

    /**
     * Reads, parses and sets the settings from the specified file and directory
     * 
     * @param config_file_relative_directory
     * @param config_filename
     * 
     * @remarks
     * Class: M_SettingsFs
     * Service: Settings
     */
    protected read_set_AllSettingsFromFile(
        config_file_relative_directory: t_relativeDirectory,
        config_filename: t_filename,
    ): this {

        const settings_file: string = config_filename;
        const config_dir: string = config_file_relative_directory;

        const settings_file_absolute_path: t_absoluteFilePath =
            // TODO: Globals need to be properly implemented
            // @ts-ignore
            Path.Root + config_dir + Separator.Directory + settings_file;

        // this has to be done with Fs as Storage class is not yet instantiated
        const settings = JSON.parse(
            Fs.readFileSync(settings_file_absolute_path, { encoding: "utf8" })
                .toString().trim(),
        );

        this.set_AllSettings(settings);

        return this;
    }

}
