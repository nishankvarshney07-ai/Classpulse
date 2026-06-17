export const teacher = {
  name: 'Dr. Aisha Rahman',
  title: 'Professor of Computer Science',
  email: 'a.rahman@university.edu',
  initials: 'AR',
}

export const activeClassroom = {
  name: 'CS 201 — Data Structures',
  section: 'Section A · Room 304',
  students: 48,
}

export const quickStats = [
  {
    key: 'online',
    label: 'Students Online',
    value: '42',
    sub: 'of 48 enrolled',
    delta: '+6',
    trend: 'up' as const,
    tone: 'primary' as const,
  },
  {
    key: 'engagement',
    label: 'Avg. Engagement Score',
    value: '87%',
    sub: 'vs 81% last week',
    delta: '+6%',
    trend: 'up' as const,
    tone: 'accent' as const,
  },
  {
    key: 'sessions',
    label: 'Active Sessions',
    value: '1',
    sub: 'Live now · 32 min',
    delta: 'Live',
    trend: 'up' as const,
    tone: 'success' as const,
  },
  {
    key: 'risk',
    label: 'Students At Risk',
    value: '5',
    sub: 'Need attention',
    delta: '-2',
    trend: 'down' as const,
    tone: 'destructive' as const,
  },
  {
    key: 'accuracy',
    label: 'Quiz Accuracy',
    value: '74%',
    sub: 'Last quiz: Trees',
    delta: '+3%',
    trend: 'up' as const,
    tone: 'warning' as const,
  },
  {
    key: 'participation',
    label: 'Participation Rate',
    value: '91%',
    sub: 'Polls & questions',
    delta: '+4%',
    trend: 'up' as const,
    tone: 'accent' as const,
  },
]

export const engagementTrend = [
  { time: '09:00', engagement: 62, focus: 58, participation: 50 },
  { time: '09:10', engagement: 71, focus: 64, participation: 60 },
  { time: '09:20', engagement: 68, focus: 70, participation: 66 },
  { time: '09:30', engagement: 80, focus: 75, participation: 72 },
  { time: '09:40', engagement: 85, focus: 79, participation: 81 },
  { time: '09:50', engagement: 78, focus: 74, participation: 77 },
  { time: '10:00', engagement: 88, focus: 83, participation: 85 },
  { time: '10:10', engagement: 92, focus: 88, participation: 90 },
  { time: '10:20', engagement: 87, focus: 85, participation: 88 },
]

export const weeklyEngagement = [
  { day: 'Mon', score: 78, quizzes: 2 },
  { day: 'Tue', score: 82, quizzes: 1 },
  { day: 'Wed', score: 75, quizzes: 3 },
  { day: 'Thu', score: 88, quizzes: 2 },
  { day: 'Fri', score: 91, quizzes: 1 },
  { day: 'Sat', score: 64, quizzes: 0 },
  { day: 'Sun', score: 70, quizzes: 1 },
]

export const activityOverview = [
  { name: 'Questions', value: 124 },
  { name: 'Poll Votes', value: 318 },
  { name: 'Quiz Subs', value: 246 },
  { name: 'Messages', value: 192 },
]

export const topics = [
  'Arrays',
  'Linked Lists',
  'Stacks',
  'Queues',
  'Trees',
  'Graphs',
] as const

export const topicUnderstanding = [
  { topic: 'Arrays', understanding: 94 },
  { topic: 'Linked Lists', understanding: 81 },
  { topic: 'Stacks', understanding: 88 },
  { topic: 'Queues', understanding: 76 },
  { topic: 'Trees', understanding: 58 },
  { topic: 'Graphs', understanding: 47 },
]

export const engagementDistribution = [
  { name: 'Engaged', value: 31, fill: 'var(--color-chart-3)' },
  { name: 'Moderate', value: 12, fill: 'var(--color-chart-4)' },
  { name: 'At Risk', value: 5, fill: 'var(--color-destructive)' },
]

export const quizPerformanceTrend = [
  { quiz: 'Arrays', accuracy: 91 },
  { quiz: 'Lists', accuracy: 84 },
  { quiz: 'Stacks', accuracy: 87 },
  { quiz: 'Queues', accuracy: 79 },
  { quiz: 'Trees', accuracy: 74 },
  { quiz: 'Graphs', accuracy: 68 },
]

export type StudentStatus = 'Engaged' | 'Moderate' | 'At Risk'

export type Student = {
  id: string
  name: string
  roll: string
  initials: string
  attendance: number
  engagement: number
  participation: number
  quizAccuracy: number
  status: StudentStatus
}

export const students: Student[] = [
  { id: 's-01', name: 'Liam Carter', roll: 'CS2-014', initials: 'LC', attendance: 96, engagement: 92, participation: 89, quizAccuracy: 88, status: 'Engaged' },
  { id: 's-02', name: 'Sofia Nguyen', roll: 'CS2-021', initials: 'SN', attendance: 98, engagement: 95, participation: 94, quizAccuracy: 91, status: 'Engaged' },
  { id: 's-03', name: 'Marcus Lee', roll: 'CS2-007', initials: 'ML', attendance: 72, engagement: 61, participation: 58, quizAccuracy: 54, status: 'At Risk' },
  { id: 's-04', name: 'Priya Sharma', roll: 'CS2-033', initials: 'PS', attendance: 89, engagement: 84, participation: 80, quizAccuracy: 82, status: 'Engaged' },
  { id: 's-05', name: 'Ethan Brooks', roll: 'CS2-018', initials: 'EB', attendance: 67, engagement: 55, participation: 49, quizAccuracy: 48, status: 'At Risk' },
  { id: 's-06', name: 'Hana Kim', roll: 'CS2-026', initials: 'HK', attendance: 84, engagement: 76, participation: 71, quizAccuracy: 73, status: 'Moderate' },
  { id: 's-07', name: 'Diego Alvarez', roll: 'CS2-011', initials: 'DA', attendance: 91, engagement: 88, participation: 85, quizAccuracy: 80, status: 'Engaged' },
  { id: 's-08', name: 'Olivia Martin', roll: 'CS2-029', initials: 'OM', attendance: 78, engagement: 70, participation: 66, quizAccuracy: 64, status: 'Moderate' },
  { id: 's-09', name: 'Noah Williams', roll: 'CS2-004', initials: 'NW', attendance: 63, engagement: 52, participation: 44, quizAccuracy: 41, status: 'At Risk' },
  { id: 's-10', name: 'Yuki Tanaka', roll: 'CS2-038', initials: 'YT', attendance: 95, engagement: 90, participation: 92, quizAccuracy: 87, status: 'Engaged' },
  { id: 's-11', name: 'Amara Okafor', roll: 'CS2-042', initials: 'AO', attendance: 81, engagement: 74, participation: 69, quizAccuracy: 70, status: 'Moderate' },
  { id: 's-12', name: 'James Foster', roll: 'CS2-016', initials: 'JF', attendance: 70, engagement: 59, participation: 51, quizAccuracy: 50, status: 'At Risk' },
]

export const studentFocusTrend = [
  { week: 'W1', focus: 64 },
  { week: 'W2', focus: 71 },
  { week: 'W3', focus: 68 },
  { week: 'W4', focus: 79 },
  { week: 'W5', focus: 85 },
  { week: 'W6', focus: 92 },
]

export const studentTimeline = [
  { time: '09:02', event: 'Joined Session', detail: 'Connected from laptop · on time', type: 'join' as const },
  { time: '09:18', event: 'Poll Answered', detail: 'Voted "O(n)" on time complexity poll', type: 'poll' as const },
  { time: '09:34', event: 'Question Asked', detail: '"How does a balanced BST stay balanced?"', type: 'question' as const },
  { time: '09:51', event: 'Quiz Submitted', detail: 'Trees quiz · 8/10 correct', type: 'quiz' as const },
  { time: '10:07', event: 'Poll Answered', detail: 'Voted "Recursion" on traversal poll', type: 'poll' as const },
]

export const aiReports = [
  {
    id: 'r-1',
    title: 'CS 201 — Weekly Engagement Digest',
    generated: '2 hours ago',
    confusingTopic: 'Graphs',
    avgEngagement: 87,
    summary:
      'Overall engagement rose 6% week-over-week, driven by strong participation during the Trees module. However, Graphs traversal concepts triggered a measurable dip in real-time focus, suggesting the topic needs reinforcement.',
    recommendations: [
      'Re-teach BFS vs DFS with a live visual walkthrough.',
      'Pair the 5 at-risk students with peer mentors for the Graphs unit.',
      'Launch a low-stakes recap quiz before the next lecture.',
    ],
    mostEngaged: ['Sofia Nguyen', 'Yuki Tanaka', 'Liam Carter'],
    needAttention: ['Noah Williams', 'Ethan Brooks', 'Marcus Lee'],
  },
]

export const notifications = [
  { id: 'n-1', type: 'join' as const, text: 'Sofia Nguyen joined the live session', time: '2m ago' },
  { id: 'n-2', type: 'quiz' as const, text: 'Trees quiz submitted by 38 students', time: '8m ago' },
  { id: 'n-3', type: 'poll' as const, text: 'Poll "Best traversal" reached 41 responses', time: '15m ago' },
  { id: 'n-4', type: 'report' as const, text: 'AI weekly digest is ready to view', time: '2h ago' },
  { id: 'n-5', type: 'join' as const, text: 'Diego Alvarez joined the live session', time: '3h ago' },
]

export const liveSession = {
  topic: 'Trees & Binary Search Trees',
  module: 'Module 5 of 6',
  elapsed: '32:14',
  studentsOnline: 42,
  avgEngagement: 87,
  pollResponses: 41,
  quizResponses: 38,
}
