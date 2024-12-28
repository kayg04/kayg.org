import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { format as formatDateFn, formatISO } from "date-fns"
import type { JSX } from "preact"
import style from "./styles/contentMeta.scss"

const TimeMeta = ({ value }: { value: Date }) => (
  <time dateTime={formatISO(value)} title={formatDateFn(value, "ccc w")}>
    {formatDateFn(value, "MMM do yyyy")}
  </time>
)

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        if (fileData.dates.created) {
          segments.push(
            <span>
              ✍︎ Created <TimeMeta value={fileData.dates.created} />
            </span>,
          )
        }

        if (fileData.dates.modified) {
          segments.push(
            <span>
              🖋️ Updated <TimeMeta value={fileData.dates.modified} />
            </span>,
          )
        }
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(
        <span>
          ⏱︎ {displayedTime}
        </span>)
      }

      segments.push(
        <a
          href={`https://github.com/kayg04/kayg.org/commits/v4/${fileData.filePath}`}
          target="_blank"
        >
          ⏳ History
        </a>,
      )

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments.map((meta, idx) => (
            <>
              {meta}
              {idx < segments.length - 1 ? <br /> : null}
            </>
          ))}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor