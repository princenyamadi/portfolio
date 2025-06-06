import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCopy, FiDownload, FiMaximize2, FiMinimize2, FiClock } from 'react-icons/fi';

interface CodeExample {
  id: string;
  title: string;
  description: string;
  category: 'react' | 'typescript' | 'api' | 'animation' | 'ai';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  code: string;
  preview?: string;
  dependencies?: string[];
  features: string[];
  estimatedTime: string;
}

const codeExamples: CodeExample[] = [
  {
    id: 'react-hook-form',
    title: 'Advanced Form Validation with React Hook Form',
    description: 'A comprehensive form validation system with custom hooks, schema validation, and dynamic field generation.',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['React', 'TypeScript', 'Validation', 'Hooks'],
    code: `import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/, 'Password must contain uppercase, lowercase, and number')
    .required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  terms: yup.boolean().oneOf([true], 'You must accept the terms')
});

const AdvancedForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const password = watch('password');

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const getPasswordStrength = (password: string) => {
    if (!password) return { score: 0, label: 'No password' };
    
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/\\d/.test(password)) score += 1;
    if (/[^\\w\\s]/.test(password)) score += 1;

    const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    return { score, label: labels[score - 1] || 'Very Weak' };
  };

  const strength = getPasswordStrength(password);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              className={\`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 \${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }\`}
              placeholder="john@example.com"
            />
          )}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <div>
              <input
                {...field}
                type="password"
                className={\`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 \${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }\`}
                placeholder="Enter your password"
              />
              {password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Password Strength:</span>
                    <span className={\`font-medium \${
                      strength.score <= 2 ? 'text-red-600' :
                      strength.score <= 3 ? 'text-yellow-600' : 'text-green-600'
                    }\`}>
                      {strength.label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className={\`h-2 rounded-full transition-all duration-300 \${
                        strength.score <= 2 ? 'bg-red-500' :
                        strength.score <= 3 ? 'bg-yellow-500' : 'bg-green-500'
                      }\`}
                      style={{ width: \`\${(strength.score / 5) * 100}%\` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="password"
              className={\`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 \${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }\`}
              placeholder="Confirm your password"
            />
          )}
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div>
        <Controller
          name="terms"
          control={control}
          render={({ field: { value, onChange } }) => (
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={value}
                onChange={onChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                I agree to the Terms and Conditions
              </span>
            </label>
          )}
        />
        {errors.terms && (
          <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !isValid}
        className={\`w-full py-2 px-4 rounded-lg font-medium transition-colors \${
          isSubmitting || !isValid
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }\`}
      >
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
};

export default AdvancedForm;`,
    dependencies: ['react-hook-form', '@hookform/resolvers', 'yup'],
    features: [
      'Real-time validation',
      'Password strength indicator',
      'Custom validation schemas',
      'Accessible form controls',
      'Loading states'
    ],
    estimatedTime: '30 min'
  },
  {
    id: 'typescript-generics',
    title: 'Advanced TypeScript Generics and Utility Types',
    description: 'Explore powerful TypeScript patterns with generics, conditional types, and mapped types for type-safe development.',
    category: 'typescript',
    difficulty: 'advanced',
    tags: ['TypeScript', 'Generics', 'Utility Types', 'Advanced'],
    code: `// Advanced TypeScript Patterns and Utility Types

// 1. Generic Repository Pattern
interface Repository<T, K = string> {
  findById(id: K): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(data: Omit<T, 'id'>): Promise<T>;
  update(id: K, data: Partial<T>): Promise<T>;
  delete(id: K): Promise<void>;
}

// 2. Conditional Types for API Responses
type ApiResponse<T> = T extends string 
  ? { message: T; success: false }
  : { data: T; success: true };

type UserResponse = ApiResponse<User>;        // { data: User; success: true }
type ErrorResponse = ApiResponse<string>;     // { message: string; success: false }

// 3. Mapped Types for Form Validation
type ValidationRule<T> = {
  required?: boolean;
  min?: T extends number ? number : never;
  max?: T extends number ? number : never;
  pattern?: T extends string ? RegExp : never;
  custom?: (value: T) => boolean | string;
};

type FormValidation<T> = {
  [K in keyof T]?: ValidationRule<T[K]>;
};

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

const userValidation: FormValidation<User> = {
  name: { required: true, pattern: /^[a-zA-Z\\s]+$/ },
  email: { required: true, pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ },
  age: { required: true, min: 18, max: 120 },
  isActive: { required: false }
};

// 4. Advanced Utility Types
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object | undefined ? DeepRequired<NonNullable<T[P]>> : T[P];
};

type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};

// Examples
type UserStrings = PickByType<User, string>;  // { id: string; name: string; email: string }
type UserNonStrings = OmitByType<User, string>; // { age: number; isActive: boolean }

// 5. Function Overloading with Generics
function createEntity<T extends { id: string }>(data: Omit<T, 'id'>): T;
function createEntity<T extends { id: number }>(data: Omit<T, 'id'>): T;
function createEntity<T extends { id: string | number }>(data: Omit<T, 'id'>): T {
  const id = typeof data === 'object' && 'id' in data 
    ? (data as any).id 
    : Math.random().toString(36);
  
  return { ...data, id } as T;
}

// 6. Event System with Type Safety
type EventMap = {
  'user:created': { user: User };
  'user:updated': { user: User; changes: Partial<User> };
  'user:deleted': { userId: string };
  'system:error': { error: Error; context: string };
};

class TypedEventEmitter<T extends Record<string, any>> {
  private listeners: {
    [K in keyof T]?: Array<(data: T[K]) => void>;
  } = {};

  on<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(listener);
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    const listeners = this.listeners[event];
    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  off<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    const listeners = this.listeners[event];
    if (listeners) {
      this.listeners[event] = listeners.filter(l => l !== listener);
    }
  }
}

// Usage
const eventEmitter = new TypedEventEmitter<EventMap>();

eventEmitter.on('user:created', ({ user }) => {
  console.log(\`User \${user.name} was created\`);
});

eventEmitter.emit('user:created', {
  user: { id: '1', name: 'John', email: 'john@example.com', age: 25, isActive: true }
});

// 7. Builder Pattern with Fluent Interface
class QueryBuilder<T> {
  private query: {
    select?: (keyof T)[];
    where?: Partial<T>;
    orderBy?: { field: keyof T; direction: 'asc' | 'desc' };
    limit?: number;
  } = {};

  select<K extends keyof T>(...fields: K[]): QueryBuilder<Pick<T, K>> {
    this.query.select = fields as (keyof T)[];
    return this as any;
  }

  where(conditions: Partial<T>): QueryBuilder<T> {
    this.query.where = { ...this.query.where, ...conditions };
    return this;
  }

  orderBy(field: keyof T, direction: 'asc' | 'desc' = 'asc'): QueryBuilder<T> {
    this.query.orderBy = { field, direction };
    return this;
  }

  limit(count: number): QueryBuilder<T> {
    this.query.limit = count;
    return this;
  }

  build() {
    return this.query;
  }
}

// Usage
const userQuery = new QueryBuilder<User>()
  .select('name', 'email')
  .where({ isActive: true })
  .orderBy('name', 'asc')
  .limit(10)
  .build();

// 8. Branded Types for Type Safety
type Brand<T, TBrand> = T & { readonly __brand: TBrand };

type UserId = Brand<string, 'UserId'>;
type Email = Brand<string, 'Email'>;
type Password = Brand<string, 'Password'>;

function createUserId(id: string): UserId {
  if (!id || id.length < 3) {
    throw new Error('Invalid user ID');
  }
  return id as UserId;
}

function createEmail(email: string): Email {
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    throw new Error('Invalid email format');
  }
  return email as Email;
}

function createPassword(password: string): Password {
  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters');
  }
  return password as Password;
}

// This prevents accidentally mixing up different string types
function findUser(id: UserId): Promise<User | null> {
  // Implementation would go here
  return Promise.resolve(null);
}

// Usage
const userId = createUserId('user123');
const email = createEmail('john@example.com');

// findUser(email); // ❌ TypeScript error - can't pass Email where UserId expected
findUser(userId);   // ✅ Correct usage

export {
  Repository,
  ApiResponse,
  FormValidation,
  TypedEventEmitter,
  QueryBuilder,
  createUserId,
  createEmail,
  createPassword
};`,
    dependencies: [],
    features: [
      'Generic repository pattern',
      'Conditional types',
      'Mapped types for validation',
      'Type-safe event system',
      'Fluent query builder',
      'Branded types for safety'
    ],
    estimatedTime: '45 min'
  },
  {
    id: 'api-design',
    title: 'RESTful API Design with Express and TypeScript',
    description: 'Build a robust, scalable API with proper error handling, validation, authentication, and documentation.',
    category: 'api',
    difficulty: 'intermediate',
    tags: ['Node.js', 'Express', 'TypeScript', 'API', 'Validation'],
    code: `import express, { Request, Response, NextFunction } from 'express';
import { body, param, query, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import rateLimit from 'express-rate-limit';

// Types
interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthenticatedRequest extends Request {
  user?: Omit<User, 'password'>;
}

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Custom Error Classes
class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}

class NotFoundError extends AppError {
  constructor(resource: string) {
    super(\`\${resource} not found\`, 404);
  }
}

class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401);
  }
}

// Middleware
const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    throw new ValidationError(errorMessages.join(', '));
  }
  next();
};

const authenticate = asyncHandler(async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    throw new UnauthorizedError('Access token required');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    // In real app, fetch user from database
    req.user = { id: decoded.id, email: decoded.email, name: decoded.name, createdAt: new Date(), updatedAt: new Date() };
    next();
  } catch (error) {
    throw new UnauthorizedError('Invalid access token');
  }
});

const authorize = (...roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    // Implementation would check user roles
    next();
  };
};

// Rate Limiting
const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many accounts created from this IP, please try again after an hour.'
  }
});

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Validation Rules
const userValidation = {
  create: [
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/)
      .withMessage('Password must contain uppercase, lowercase, and number'),
    body('name')
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('Name must be between 2 and 50 characters')
  ],
  update: [
    body('email')
      .optional()
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('name')
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('Name must be between 2 and 50 characters')
  ],
  query: [
    query('page')
      .optional()
      .isInt({ min: 1 })
      .withMessage('Page must be a positive integer'),
    query('limit')
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage('Limit must be between 1 and 100'),
    query('search')
      .optional()
      .trim()
      .isLength({ min: 1 })
      .withMessage('Search term cannot be empty')
  ]
};

// Controllers
class UserController {
  static async getUsers(req: Request, res: Response) {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string;

    // Mock data - in real app, this would query the database
    const users: User[] = [];
    const total = 0;

    const response: ApiResponse<User[]> = {
      success: true,
      data: users,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };

    res.json(response);
  }

  static async getUserById(req: AuthenticatedRequest, res: Response) {
    const { id } = req.params;

    // Mock user - in real app, fetch from database
    const user = {
      id,
      email: 'john@example.com',
      name: 'John Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    if (!user) {
      throw new NotFoundError('User');
    }

    const response: ApiResponse<Omit<User, 'password'>> = {
      success: true,
      data: user
    };

    res.json(response);
  }

  static async createUser(req: Request, res: Response) {
    const { email, password, name } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user (mock)
    const newUser: User = {
      id: Math.random().toString(36),
      email,
      password: hashedPassword,
      name,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    const response: ApiResponse<{
      user: Omit<User, 'password'>;
      token: string;
    }> = {
      success: true,
      data: {
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          createdAt: newUser.createdAt,
          updatedAt: newUser.updatedAt
        },
        token
      },
      message: 'User created successfully'
    };

    res.status(201).json(response);
  }

  static async updateUser(req: AuthenticatedRequest, res: Response) {
    const { id } = req.params;
    const updates = req.body;

    // Check if user exists and user owns the resource
    if (req.user?.id !== id) {
      throw new UnauthorizedError('Cannot update other users');
    }

    // Update user (mock)
    const updatedUser = {
      id,
      email: updates.email || req.user.email,
      name: updates.name || req.user.name,
      createdAt: req.user.createdAt,
      updatedAt: new Date()
    };

    const response: ApiResponse<Omit<User, 'password'>> = {
      success: true,
      data: updatedUser,
      message: 'User updated successfully'
    };

    res.json(response);
  }

  static async deleteUser(req: AuthenticatedRequest, res: Response) {
    const { id } = req.params;

    // Check if user exists and user owns the resource
    if (req.user?.id !== id) {
      throw new UnauthorizedError('Cannot delete other users');
    }

    // Delete user (mock)
    
    const response: ApiResponse = {
      success: true,
      message: 'User deleted successfully'
    };

    res.json(response);
  }
}

// Error Handler
const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  let err = error;

  // Log error
  console.error(error);

  // Mongoose bad ObjectId
  if (error.name === 'CastError') {
    const message = 'Resource not found';
    err = new NotFoundError(message);
  }

  // Mongoose duplicate key
  if ((error as any).code === 11000) {
    const message = 'Duplicate field value entered';
    err = new ValidationError(message);
  }

  // Mongoose validation error
  if (error.name === 'ValidationError') {
    const message = Object.values((error as any).errors).map((val: any) => val.message).join(', ');
    err = new ValidationError(message);
  }

  const response: ApiResponse = {
    success: false,
    message: (err as AppError).message || 'Server Error'
  };

  res.status((err as AppError).statusCode || 500).json(response);
};

// Routes
const app = express();

app.use(express.json());
app.use(generalLimiter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// User routes
app.get('/api/users', 
  userValidation.query, 
  validateRequest, 
  authenticate, 
  asyncHandler(UserController.getUsers)
);

app.get('/api/users/:id', 
  param('id').isMongoId().withMessage('Invalid user ID'), 
  validateRequest, 
  authenticate, 
  asyncHandler(UserController.getUserById)
);

app.post('/api/users', 
  createAccountLimiter, 
  userValidation.create, 
  validateRequest, 
  asyncHandler(UserController.createUser)
);

app.put('/api/users/:id', 
  param('id').isMongoId().withMessage('Invalid user ID'), 
  userValidation.update, 
  validateRequest, 
  authenticate, 
  asyncHandler(UserController.updateUser)
);

app.delete('/api/users/:id', 
  param('id').isMongoId().withMessage('Invalid user ID'), 
  validateRequest, 
  authenticate, 
  asyncHandler(UserController.deleteUser)
);

app.use(errorHandler);

export default app;`,
    dependencies: ['express', 'express-validator', 'jsonwebtoken', 'bcrypt', 'express-rate-limit'],
    features: [
      'RESTful API design',
      'Request validation',
      'JWT authentication',
      'Error handling',
      'Rate limiting',
      'Proper HTTP status codes'
    ],
    estimatedTime: '60 min'
  }
];

const CodeShowcaseSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedExample, setSelectedExample] = useState<CodeExample | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Examples', icon: '💻' },
    { id: 'react', name: 'React', icon: '⚛️' },
    { id: 'typescript', name: 'TypeScript', icon: '🔷' },
    { id: 'api', name: 'API Design', icon: '🔧' },
    { id: 'animation', name: 'Animations', icon: '✨' },
    { id: 'ai', name: 'AI Integration', icon: '🤖' }
  ];

  const filteredExamples = selectedCategory === 'all' 
    ? codeExamples 
    : codeExamples.filter(example => example.category === selectedCategory);

  const copyToClipboard = async (code: string, exampleId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(exampleId);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-500/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-blue-400 bg-blue-500/20';
    }
  };

  return (
    <section id="code-showcase" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Interactive Code Showcase</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore real-world code examples with detailed explanations and interactive features
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Code Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredExamples.map((example, index) => (
              <motion.div
                key={example.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(example.difficulty)}`}>
                      {example.difficulty.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center">
                      <FiClock className="w-3 h-3 mr-1" />
                      {example.estimatedTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {example.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {example.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {example.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {example.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Code Preview */}
                <div className="relative">
                  <pre className="p-4 text-xs text-slate-300 bg-slate-900/50 overflow-hidden">
                    <code>
                      {example.code.substring(0, 200)}...
                    </code>
                  </pre>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  
                  {/* Actions */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => copyToClipboard(example.code, example.id)}
                        className="p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200"
                        title="Copy code"
                      >
                        {copiedCode === example.id ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-green-400"
                          >
                            ✓
                          </motion.span>
                        ) : (
                          <FiCopy className="w-4 h-4" />
                        )}
                      </button>
                      
                      {example.dependencies && example.dependencies.length > 0 && (
                        <button
                          className="p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200"
                          title="View dependencies"
                        >
                          <FiDownload className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    
                    <button
                      onClick={() => setSelectedExample(example)}
                      className="px-4 py-2 text-sm font-medium text-indigo-300 hover:text-white bg-indigo-500/20 hover:bg-indigo-500/30 rounded-lg transition-all duration-200"
                    >
                      View Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Code Modal */}
      <AnimatePresence>
        {selectedExample && (
          <CodeModal
            example={selectedExample}
            isFullscreen={isFullscreen}
            onClose={() => setSelectedExample(null)}
            onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
            onCopyCode={copyToClipboard}
            copiedCode={copiedCode}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Code Modal Component
const CodeModal: React.FC<{
  example: CodeExample;
  isFullscreen: boolean;
  onClose: () => void;
  onToggleFullscreen: () => void;
  onCopyCode: (code: string, id: string) => void;
  copiedCode: string | null;
}> = ({ example, isFullscreen, onClose, onToggleFullscreen, onCopyCode, copiedCode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-50 ${
        isFullscreen ? 'p-0' : 'p-4 flex items-center justify-center'
      }`}
      onClick={isFullscreen ? undefined : onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className={`bg-slate-800 ${
          isFullscreen ? 'w-full h-full' : 'rounded-2xl max-w-6xl w-full max-h-[90vh]'
        } overflow-hidden flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700 flex-shrink-0">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{example.title}</h3>
            <p className="text-slate-300 text-sm">{example.description}</p>
            
            {/* Meta Info */}
            <div className="flex items-center space-x-4 mt-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                example.difficulty === 'beginner' ? 'bg-green-500/20 text-green-300' :
                example.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                'bg-red-500/20 text-red-300'
              }`}>
                {example.difficulty.toUpperCase()}
              </span>
              <span className="text-xs text-slate-400">
                Estimated time: {example.estimatedTime}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onCopyCode(example.code, example.id)}
              className="p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200"
              title="Copy all code"
            >
              {copiedCode === example.id ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-green-400"
                >
                  ✓
                </motion.span>
              ) : (
                <FiCopy className="w-5 h-5" />
              )}
            </button>
            
            <button
              onClick={onToggleFullscreen}
              className="p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200"
              title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? (
                <FiMinimize2 className="w-5 h-5" />
              ) : (
                <FiMaximize2 className="w-5 h-5" />
              )}
            </button>
            
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-hidden">
          <pre className="h-full p-6 overflow-auto text-sm bg-slate-900">
            <code className="text-slate-300 language-typescript whitespace-pre-wrap">
              {example.code}
            </code>
          </pre>
        </div>

        {/* Footer */}
        {example.dependencies && example.dependencies.length > 0 && (
          <div className="p-6 border-t border-slate-700 flex-shrink-0">
            <h4 className="text-sm font-semibold text-white mb-2">Dependencies:</h4>
            <div className="flex flex-wrap gap-2">
              {example.dependencies.map((dep) => (
                <span
                  key={dep}
                  className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300"
                >
                  {dep}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CodeShowcaseSection; 