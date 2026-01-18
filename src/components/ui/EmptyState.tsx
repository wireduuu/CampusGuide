import { type ReactNode } from "react";

type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
};

const EmptyState = ({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {icon && (
        <div
          className="mb-4 flex h-14 w-14 items-center justify-center rounded-full"
          style={{
            backgroundColor: "rgba(var(--color-primary), 0.1)",
          }}
        >
          {icon}
        </div>
      )}

      <h3 className="text-base font-semibold mb-1">
        {title}
      </h3>

      {description && (
        <p
          className="text-sm max-w-sm"
          style={{ color: "rgb(var(--color-text-muted))" }}
        >
          {description}
        </p>
      )}

      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};

export default EmptyState;
